"use client";

import { useState } from "react";
import { objetivos } from "@/lib/conteudo";
import { Botao, Container, Sobrancelha } from "./ui";

const inclui = [
  { rotulo: "1h", texto: "Consulta inicial de sessenta minutos, online ou no consultório em Lourdes." },
  { rotulo: "48h", texto: "Roteiro escrito enviado em até dois dias úteis depois da consulta." },
  { rotulo: "15d", texto: "Retorno quinzenal incluído nos três primeiros meses." },
];

const campo =
  "min-h-12 w-full rounded-xl border border-papel/25 bg-papel/8 px-3.5 py-3 text-papel placeholder:text-papel/40 focus:border-curcuma focus:outline-none";

export default function Agendar() {
  const [enviado, setEnviado] = useState(false);

  return (
    <section id="agendar" className="pb-16 md:pb-24">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-beterraba text-papel">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-6 sm:p-10 lg:p-14">
              <Sobrancelha className="text-curcuma">Primeira consulta</Sobrancelha>
              <h2 className="mt-4 text-t2 text-balance text-papel">
                Uma hora para entender{" "}
                <em className="font-editorial font-light text-curcuma italic">o seu dia.</em>
              </h2>
              <p className="mt-4 max-w-[42ch] text-pretty text-papel/70">
                Sem plano pronto, sem promessa de número na balança. A gente começa pela sua rotina e
                decide junto o que dá para mudar.
              </p>

              <ul className="mt-8 flex flex-col gap-3.5">
                {inclui.map((item) => (
                  <li key={item.rotulo} className="flex items-start gap-3 text-[0.92rem]">
                    <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-papel/12 text-[0.72rem] font-bold text-curcuma">
                      {item.rotulo}
                    </span>
                    <span className="text-papel/85">{item.texto}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-beterraba-2 p-6 sm:p-10 lg:p-12">
              {enviado ? (
                <div className="rounded-2xl border border-curcuma bg-curcuma/15 p-6 text-center">
                  <strong className="block font-display text-lg font-extrabold text-curcuma">
                    Pedido enviado
                  </strong>
                  <p className="mt-2 text-[0.9rem] text-papel/80">
                    Retorno pelo WhatsApp em até 24 horas em dias úteis, com os horários livres da
                    semana.
                  </p>
                  <button
                    type="button"
                    onClick={() => setEnviado(false)}
                    className="mt-4 min-h-11 text-[0.85rem] font-bold text-curcuma underline underline-offset-4"
                  >
                    Enviar outro pedido
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setEnviado(true);
                  }}
                >
                  <h3 className="text-t3 text-papel">Pedir um horário</h3>
                  <p className="mt-2 text-[0.88rem] text-papel/70">
                    Retorno pelo WhatsApp com os horários da semana.
                  </p>

                  <div className="mt-6 flex flex-col gap-4">
                    <label className="flex flex-col gap-1.5">
                      <span className="text-[0.72rem] tracking-[0.1em] text-papel/65 uppercase">
                        Nome
                      </span>
                      <input
                        name="nome"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Como posso te chamar"
                        className={campo}
                      />
                    </label>

                    <label className="flex flex-col gap-1.5">
                      <span className="text-[0.72rem] tracking-[0.1em] text-papel/65 uppercase">
                        WhatsApp
                      </span>
                      {/* type tel + inputMode abrem o teclado numérico no celular */}
                      <input
                        name="telefone"
                        type="tel"
                        inputMode="tel"
                        required
                        autoComplete="tel"
                        placeholder="(31) 90000-0000"
                        className={campo}
                      />
                    </label>

                    <label className="flex flex-col gap-1.5">
                      <span className="text-[0.72rem] tracking-[0.1em] text-papel/65 uppercase">
                        O que te trouxe aqui
                      </span>
                      <select name="objetivo" className={`${campo} appearance-none`}>
                        {objetivos.map((op) => (
                          <option key={op} className="text-tinta">
                            {op}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <Botao type="submit" className="mt-6 w-full">
                    Enviar pedido de consulta
                  </Botao>
                  <p className="mt-4 text-center text-[0.75rem] text-papel/55">
                    Seus dados ficam comigo. Nada de lista de e-mails.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
