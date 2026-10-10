import { describe, expect, it } from "vitest";
import { hostSpan } from "./stringMatch.mjs";

/**
 * `afterScheme` is the index just past the scheme's colon, which is where
 * `uriEqual` and `uriKey` call `hostSpan`.
 */
function host(uri: string): string | null {
    const span = hostSpan(uri, uri.indexOf(":") + 1);
    return span ? uri.slice(span.start, span.end) : null;
}

describe("hostSpan", () => {
    it("returns null when the URI has no // authority", () => {
        expect(host("mailto:user@Example.com")).toBeNull();
        expect(host("urn:example:Example.COM")).toBeNull();
        expect(host("https:/example.com")).toBeNull();
    });

    it("ends the host at a path, a query, a fragment, or the end of the string", () => {
        expect(host("https://example.com/A")).toBe("example.com");
        expect(host("https://example.com?x=1")).toBe("example.com");
        expect(host("https://example.com#frag")).toBe("example.com");
        expect(host("https://example.com")).toBe("example.com");
    });

    it("skips userinfo and starts the host after the last @", () => {
        expect(host("https://User@example.com/A")).toBe("example.com");
        expect(host("https://a@b@example.com/A")).toBe("example.com");
    });

    it("excludes the port", () => {
        const uri = "https://User@example.com:443/A";
        const span = hostSpan(uri, "https:".length);
        expect(span).toEqual({
            start: "https://User@".length,
            end: "https://User@example.com".length,
        });
        expect(host(uri)).toBe("example.com");
        expect(host("ldap://Example.com:389/CN=Bob")).toBe("Example.com");
    });

    it("includes IPv6 brackets and does not treat the colons inside them as a port", () => {
        expect(host("https://[2001:DB8::1]/Path")).toBe("[2001:DB8::1]");
        expect(host("https://[2001:DB8::1]:443/Path")).toBe("[2001:DB8::1]");
        expect(host("https://User@[2001:DB8::1]:443/Path")).toBe("[2001:DB8::1]");
    });

    it("returns null when a bracketed host is not closed inside the authority", () => {
        expect(host("https://[2001:DB8::1/Path")).toBeNull();
        expect(host("https://[example.com/foo]")).toBeNull();
    });

    it("returns an empty host when // is present but no host is", () => {
        expect(host("https://")).toBe("");
        expect(host("https:///path")).toBe("");
        expect(host("https://:443/A")).toBe("");
    });
});
