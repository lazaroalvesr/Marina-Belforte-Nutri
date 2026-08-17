import { ingredientes } from "@/lib/conteudo";

export default function Faixa() {
  return (
    <div className="overflow-hidden bg-beterraba py-3 text-papel" aria-hidden="true">
      <div className="faixa-anima flex w-max">
        {[0, 1].map((copia) => (
          <ul key={copia} className="flex shrink-0 items-center gap-9 px-4">
            {ingredientes.map((item) => (
              <li
                key={item}
                className="flex items-center gap-9 text-[0.72rem] tracking-[0.15em] whitespace-nowrap text-papel/85 uppercase sm:text-[0.78rem]"
              >
                {item}
                <span className="text-curcuma">◦</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
