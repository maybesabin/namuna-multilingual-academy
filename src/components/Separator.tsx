const Separator = ({ mt }: { mt?: number }) => {
    return (
        <div
            style={{ marginTop: `${mt}px` }}
            className="w-full h-[1px] bg-neutral-200"
        />
    )
}

export default Separator