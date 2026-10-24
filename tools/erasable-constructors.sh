mapfile -t packages < <(
  for dir in packages/*; do
    printf '%s\n' "$dir"
  done | sort
)
node tools/explicit-readonly-params.mjs "${packages[@]}"
