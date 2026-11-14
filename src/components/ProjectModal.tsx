import { useState, useEffect } from 'react';
import { X, ArrowUpRight, Github, Check, Layers, Activity, Cpu, ShoppingBag } from 'lucide-react';
import { ProjectItem } from '../data/portfolio';
import { ResilientImage } from './ResilientImage';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

function InteractiveProjectPreview({ kind }: { kind: ProjectItem['previewKind'] }) {
  const [region, setRegion] = useState<'us-west-2' | 'eu-central-1' | 'ap-northeast-1'>('us-west-2');
  const [tokenVariant, setTokenVariant] = useState<'primary' | 'secondary' | 'quiet'>('primary');
  const [selectedNode, setSelectedNode] = useState<'gateway' | 'ledger' | 'cache'>('gateway');
  const [selectedFinish, setSelectedFinish] = useState<'Natural Linen' | 'Warm Stone' | 'Charcoal'>('Natural Linen');

  if (kind === 'telemetry') {
    const metricsByRegion = {
      'us-west-2': { p95: '142 ms', spend: '$14,280/mo', throughput: '48.2k req/s', bars: [42, 58, 49, 71, 64, 52, 61, 48] },
      'eu-central-1': { p95: '176 ms', spend: '$9,640/mo', throughput: '31.7k req/s', bars: [34, 41, 60, 55, 48, 67, 51, 44] },
      'ap-northeast-1': { p95: '194 ms', spend: '$6,910/mo', throughput: '22.4k req/s', bars: [28, 39, 44, 52, 69, 58, 42, 37] },
    }[region];

    return (
      <div className="rounded-xl border border-zinc-200 bg-zinc-950 p-5 text-zinc-100 dark:border-zinc-800">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-2 text-xs font-medium text-zinc-300">
            <Activity className="h-4 w-4 text-blue-400" aria-hidden="true" />
            <span>Interactive Cluster Telemetry Sandbox</span>
          </div>
          <div className="flex items-center gap-1 rounded-lg bg-zinc-900 p-1">
            {(['us-west-2', 'eu-central-1', 'ap-northeast-1'] as const).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRegion(r)}
                className={`rounded-md px-2.5 py-1 font-mono-tabular text-xs transition-colors whitespace-nowrap shrink-0 ${
                  region === r
                    ? 'bg-blue-600 text-white'
                    : 'text-zinc-400 hover:text-zinc-100'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="rounded-lg bg-zinc-900/90 p-3">
            <p className="text-xs text-zinc-400">P95 Latency</p>
            <p className="mt-1 font-mono-tabular text-lg font-semibold text-white">{metricsByRegion.p95}</p>
          </div>
          <div className="rounded-lg bg-zinc-900/90 p-3">
            <p className="text-xs text-zinc-400">Monthly Spend</p>
            <p className="mt-1 font-mono-tabular text-lg font-semibold text-white">{metricsByRegion.spend}</p>
          </div>
          <div className="rounded-lg bg-zinc-900/90 p-3">
            <p className="text-xs text-zinc-400">Throughput</p>
            <p className="mt-1 font-mono-tabular text-lg font-semibold text-white">{metricsByRegion.throughput}</p>
          </div>
        </div>

        <div className="mt-4 flex h-24 items-end gap-2 rounded-lg bg-zinc-900/60 p-3">
          {metricsByRegion.bars.map((val, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1">
              <div
                className="w-full rounded-sm bg-blue-500/80 transition-all duration-200"
                style={{ height: `${val}%` }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (kind === 'design-system') {
    const variantStyles = {
      primary: 'bg-blue-600 text-white border-transparent hover:bg-blue-700',
      secondary: 'bg-zinc-900 text-white border-transparent hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950',
      quiet: 'bg-transparent text-zinc-900 border-zinc-300 hover:bg-zinc-100 dark:text-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800',
    }[tokenVariant];

    return (
      <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 pb-4 dark:border-zinc-800">
          <div className="flex items-center gap-2 text-xs font-medium text-zinc-700 dark:text-zinc-300">
            <Layers className="h-4 w-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            <span>Interactive Component Token Inspector</span>
          </div>
          <div className="flex items-center gap-1 rounded-lg bg-zinc-200/70 p-1 dark:bg-zinc-800">
            {(['primary', 'secondary', 'quiet'] as const).map((variant) => (
              <button
                key={variant}
                type="button"
                onClick={() => setTokenVariant(variant)}
                className={`rounded-md px-2.5 py-1 text-xs font-medium capitalize transition-colors whitespace-nowrap shrink-0 ${
                  tokenVariant === variant
                    ? 'bg-white text-zinc-950 shadow-xs dark:bg-zinc-950 dark:text-zinc-50'
                    : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100'
                }`}
              >
                {variant}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <button
            type="button"
            className={`rounded-lg border px-5 py-2.5 text-sm font-medium transition-colors ${variantStyles}`}
          >
            Confirm Deployment
          </button>
          <code className="rounded-lg border border-zinc-200 bg-white px-3 py-2 font-mono-tabular text-xs text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
            --btn-variant: &quot;{tokenVariant}&quot;; --radius-md: 8px; --contrast: AA
          </code>
        </div>
      </div>
    );
  }

  if (kind === 'architecture') {
    const nodeInfo = {
      gateway: { label: 'Edge API Gateway', tech: 'Go 1.23 · Rate Limiting & JWT Verification', latency: '4.2 ms' },
      ledger: { label: 'CRDT Sync Engine', tech: 'Yjs Binary Delta · WebSocket Broadcast', latency: '11.8 ms' },
      cache: { label: 'Snapshot Persistence', tech: 'PostgreSQL + Object Storage Checkpoints', latency: '19.4 ms' },
    }[selectedNode];

    return (
      <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex items-center gap-2 border-b border-zinc-200 pb-3 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">
          <Cpu className="h-4 w-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
          <span>Interactive Service Topology Node Inspector</span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {(['gateway', 'ledger', 'cache'] as const).map((node) => (
            <button
              key={node}
              type="button"
              onClick={() => setSelectedNode(node)}
              className={`rounded-lg border px-3 py-2.5 text-left text-xs font-medium transition-colors ${
                selectedNode === node
                  ? 'border-blue-600 bg-blue-50 text-blue-700 dark:border-blue-500 dark:bg-blue-950/50 dark:text-blue-300'
                  : 'border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300'
              }`}
            >
              {node === 'gateway' ? '01. Gateway' : node === 'ledger' ? '02. CRDT Sync' : '03. Storage'}
            </button>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-zinc-200 bg-white p-3.5 dark:border-zinc-800 dark:bg-zinc-950">
          <div>
            <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">{nodeInfo.label}</p>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">{nodeInfo.tech}</p>
          </div>
          <span className="font-mono-tabular text-xs font-medium text-blue-600 dark:text-blue-400">
            Median hop: {nodeInfo.latency}
          </span>
        </div>
      </div>
    );
  }

  const priceMap = {
    'Natural Linen': '$185.00',
    'Warm Stone': '$195.00',
    Charcoal: '$195.00',
  }[selectedFinish];

  return (
    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center gap-2 border-b border-zinc-200 pb-3 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">
        <ShoppingBag className="h-4 w-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
        <span>Interactive Storefront Edge-State Preview</span>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
            Sirocco Woven Lounge Throw · {selectedFinish}
          </p>
          <p className="mt-0.5 font-mono-tabular text-xs text-zinc-600 dark:text-zinc-400">
            Edge-cached SKU · {priceMap} · In stock for same-day dispatch
          </p>
        </div>

        <div className="flex items-center gap-1.5">
          {(['Natural Linen', 'Warm Stone', 'Charcoal'] as const).map((finish) => (
            <button
              key={finish}
              type="button"
              onClick={() => setSelectedFinish(finish)}
              className={`rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                selectedFinish === finish
                  ? 'border-blue-600 bg-blue-600 text-white'
                  : 'border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300'
              }`}
            >
              {finish}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/70 p-4 backdrop-blur-xs sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-950"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Top Modal Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-zinc-200 bg-white/95 px-6 py-4 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/95">
          <div className="min-w-0">
            <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
              {project.category} · <span className="font-mono-tabular">{project.year}</span> · {project.role}
            </p>
            <h3
              id="project-modal-title"
              className="truncate font-display text-lg font-bold text-zinc-950 sm:text-xl dark:text-zinc-50"
            >
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study modal"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="space-y-7 p-6 sm:p-8">
          {/* High-Resolution Preview Image */}
          <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
            <ResilientImage
              src={project.image}
              alt={project.imageAlt}
              fallbackTitle={project.title}
              className="aspect-[16/10] w-full"
            />
          </div>

          {/* Interactive Live Preview Sandbox */}
          <div>
            <h4 className="mb-3 font-display text-sm font-semibold text-zinc-950 dark:text-zinc-100">
              Live Interactive Preview
            </h4>
            <InteractiveProjectPreview kind={project.previewKind} />
          </div>

          {/* Overview & Architecture */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h4 className="font-display text-sm font-semibold text-zinc-950 dark:text-zinc-100">
                Project Overview
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {project.description}
              </p>
            </div>
            <div>
              <h4 className="font-display text-sm font-semibold text-zinc-950 dark:text-zinc-100">
                Architecture Notes
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {project.architectureNotes}
              </p>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="border-t border-zinc-200 pt-6 dark:border-zinc-800">
            <h4 className="font-display text-sm font-semibold text-zinc-950 dark:text-zinc-100">
              Key Outcomes &amp; Features
            </h4>
            <ul className="mt-3 space-y-2.5">
              {project.achievements.map((achievement, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Stack & Action Links */}
          <div className="flex flex-col justify-between gap-5 border-t border-zinc-200 pt-6 sm:flex-row sm:items-center dark:border-zinc-800">
            <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
              <span className="text-zinc-950 dark:text-zinc-200">Stack: </span>
              {project.technologies.join(' · ')}
            </p>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-900 whitespace-nowrap transition-colors hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                <span>GitHub Repo</span>
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white whitespace-nowrap transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-blue-500 dark:text-zinc-950 dark:hover:bg-blue-400"
              >
                <span>Open Live Deployment</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
