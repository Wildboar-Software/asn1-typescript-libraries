#!/usr/bin/env bash

# This is just a one-shot script for me to onboard a ton of packages at once.
# I am still committing it to git history; might be useful later.
# This required temporary edits to other unrelated files in this repo.

set -euo pipefail

packages=(
    # "acp133"
    "ain"
    "c1222"
    "cdt"
    "charging"
    "cosem"
    "credssp"
    "emrtd"
    "gdt"
    "glow"
    "goose"
    "h248"
    "hi2operations"
    "lix2"
    "lnpdqp"
    "logotypecertextn"
    "lpp"
    "nist-csor"
    "novell_pkis"
    "p772"
    "pkinit"
    "q932"
    "q932ros"
    "sgp22"
    "sgp32"
    "smrse"
    "spnego"
    "sv"
    "z3950"
)

for pkg in "${packages[@]}"; do
  echo "Onboarding ${pkg}..."
  git checkout -b "onboard_${pkg}"
  npx nx g @nx/js:lib packages/${pkg} \
    --name @wildboar/${pkg} \
    --bundler=tsc \
    --linter=none \
    --unitTestRunner=vitest \
    --testEnvironment=node \
    --buildable=true \
    --compiler=tsc \
    --useProjectJson=true
  rm -rf packages/${pkg}/src/*
  echo 'export {};' > packages/${pkg}/src/index.mts
  mkdir -p packages/${pkg}/src/lib
  mkdir -p packages/${pkg}/doc
  cp ~/Downloads/asn1-compiled-to-ts/${pkg}/asn1/* packages/${pkg}/doc
  cp -r ~/Downloads/asn1-compiled-to-ts/${pkg}/source/modules packages/${pkg}/src/lib
  sed "s/spkac/${pkg}/" packages/spkac/project.json > packages/${pkg}/project.json
  sed "s/spkac/${pkg}/" packages/spkac/package.json > packages/${pkg}/package.json
  sed "s/spkac/${pkg}/" packages/spkac/jsr.json > packages/${pkg}/jsr.json
  sed -i 's/"version": "2.0.1"/"version": "0.1.0"/' packages/${pkg}/package.json
  sed -i 's/"version": "2.0.1"/"version": "0.1.0"/' packages/${pkg}/jsr.json
  sed "s/PKG_NAME/${pkg}/" packages/tai/README.md > packages/${pkg}/README.md
  cp packages/v59/LICENSE.txt packages/${pkg}/LICENSE.txt
  
  git add packages/${pkg}
  git add package.json
  git add package-lock.json
  git add tsconfig.json
  git commit -m "${pkg}: initial"
  git push -u origin "onboard_${pkg}"
  git checkout master
done

for pkg in "${packages[@]}"; do
  gh pr create --repo Wildboar-Software/asn1-typescript-libraries --title "Onboard ${pkg}" --head onboard_${pkg} --body "Onboard the \`@wildboar/${pkg}\` module." --label onboard --draft --assignee @me
done