/* eslint-disable */
import {
    OPTIONAL,
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    DERElement,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    mappingFromJava,
    mappingFromJOSE,
    mappingFromNodeJS,
    mappingFromNodeJSHash,
    mappingFromOid,
    mappingFromPKCS11,
    mappingFromWebCrypto,
    type AlgorithmCryptoMapping,
    type WebCryptoAlgorithmIdentifier,
} from "./algorithmCryptoMappings.mjs";

export type { WebCryptoAlgorithm, WebCryptoAlgorithmIdentifier } from "./algorithmCryptoMappings.mjs";

/**
 * JSON Encoding Rules encoding of {@link AlgorithmIdentifier}.
 */
export type AlgorithmIdentifierJSON = {
    algorithm: string;
    parameters?: unknown;
};

/**
 * @summary AlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlgorithmIdentifier{ALGORITHM:SupportedAlgorithms} ::= SEQUENCE {
 *   algorithm       ALGORITHM.&id({SupportedAlgorithms}),
 *   parameters      ALGORITHM.&Type({SupportedAlgorithms}{@algorithm}) OPTIONAL,
 *   ... }
 * ```
 *
 */
export class AlgorithmIdentifier {
    constructor(
        /**
         * @summary `algorithm`.
         * @public
         * @readonly
         */
        readonly algorithm: OBJECT_IDENTIFIER,
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters?: OPTIONAL<_Element>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AlgorithmIdentifier
     * @description
     *
     * This takes an `object` and converts it to a `AlgorithmIdentifier`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AlgorithmIdentifier`.
     * @returns {AlgorithmIdentifier}
     */
    public static _from_object(
        _o: { [_K in keyof AlgorithmIdentifier]: AlgorithmIdentifier[_K] }
    ): AlgorithmIdentifier {
        return new AlgorithmIdentifier(
            _o.algorithm,
            _o.parameters,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Convert this `AlgorithmIdentifier` to a JSON encoding loosely following ITU-T X.697 (JER)
     * @description
     *
     * Open-type `parameters` are encoded with {@link _Element.toJSON}. Absent
     * optional components are omitted. Unrecognized extensions are not represented.
     *
     * @returns The JSON Encoding Rules encoding of this value
     * @function
     * @public
     */
    public toJSON(): AlgorithmIdentifierJSON {
        const json: AlgorithmIdentifierJSON = {
            algorithm: this.algorithm.toJSON(),
        };
        if (this.parameters !== undefined) {
            json.parameters = this.parameters.toJSON();
        }
        return json;
    }

    /**
     * @summary Convert this algorithm to a Node.js `crypto.createHash` name
     * @returns A name accepted by Node.js `crypto.createHash` and `crypto.createHmac`
     * @function
     * @public
     */
    public toNodeJSHash(): string {
        const mapping = mappingFromOid(this.algorithm.toJSON());
        if (
            (mapping === undefined)
            || (mapping.nodeJSHash === undefined)
        ) {
            throw new Error(
                `unable to convert algorithm ${this.algorithm.toJSON()} to a node.js createHash name`,
            );
        }
        return mapping.nodeJSHash;
    }

    /**
     * @summary Convert this algorithm to a Node.js / OpenSSL crypto name
     * @description
     *
     * Returns the OpenSSL name used by Node.js `createHash`, `createSign`,
     * `createVerify`, and `createCipheriv`.
     *
     * @returns An OpenSSL / Node.js algorithm name
     * @function
     * @public
     */
    public toNodeJS(): string {
        return AlgorithmIdentifier._nameFromMapping(
            mappingFromOid(this.algorithm.toJSON()),
            "nodeJS",
            `unable to convert algorithm ${this.algorithm.toJSON()} to a node.js crypto name`,
        );
    }

    /**
     * @summary Convert this algorithm to a Web Cryptography API identifier
     * @returns A Web Crypto `AlgorithmIdentifier` (string or algorithm object)
     * @function
     * @public
     */
    public toWebCrypto(): WebCryptoAlgorithmIdentifier {
        return AlgorithmIdentifier._nameFromMapping(
            mappingFromOid(this.algorithm.toJSON()),
            "webCrypto",
            `unable to convert algorithm ${this.algorithm.toJSON()} to a web crypto algorithm`,
        );
    }

    /**
     * @summary Convert this algorithm to a JOSE / JWA algorithm name
     * @returns A JWA `alg` value such as `RS256` or `HS256`
     * @function
     * @public
     */
    public toJOSE(): string {
        return AlgorithmIdentifier._nameFromMapping(
            mappingFromOid(this.algorithm.toJSON()),
            "jose",
            `unable to convert algorithm ${this.algorithm.toJSON()} to a jose algorithm`,
        );
    }

    /**
     * @summary Convert this algorithm to a Java JCA / JCE name
     * @returns A Java cryptographic algorithm name such as `SHA-256` or `SHA256withRSA`
     * @function
     * @public
     */
    public toJava(): string {
        return AlgorithmIdentifier._nameFromMapping(
            mappingFromOid(this.algorithm.toJSON()),
            "java",
            `unable to convert algorithm ${this.algorithm.toJSON()} to a java cryptographic algorithm`,
        );
    }

    /**
     * @summary Convert this algorithm to a PKCS#11 mechanism name
     * @returns A `CKM_*` mechanism name
     * @function
     * @public
     */
    public toPKCS11(): string {
        return AlgorithmIdentifier._nameFromMapping(
            mappingFromOid(this.algorithm.toJSON()),
            "pkcs11",
            `unable to convert algorithm ${this.algorithm.toJSON()} to a pkcs#11 mechanism`,
        );
    }

    /**
     * @summary Construct an `AlgorithmIdentifier` from a Node.js `createHash` name
     * @param algorithm A name accepted by Node.js `crypto.createHash`
     * @returns The equivalent `AlgorithmIdentifier`
     * @function
     * @public
     * @static
     */
    public static fromNodeJSHash(algorithm: string): AlgorithmIdentifier {
        return AlgorithmIdentifier._fromMapping(mappingFromNodeJSHash(algorithm));
    }

    /**
     * @summary Construct an `AlgorithmIdentifier` from a Node.js / OpenSSL crypto name
     * @param algorithm An OpenSSL / Node.js algorithm name
     * @returns The equivalent `AlgorithmIdentifier`
     * @function
     * @public
     * @static
     */
    public static fromNodeJS(algorithm: string): AlgorithmIdentifier {
        return AlgorithmIdentifier._fromMapping(mappingFromNodeJS(algorithm));
    }

    /**
     * @summary Construct an `AlgorithmIdentifier` from a Web Cryptography API identifier
     * @param algorithm A Web Crypto algorithm name or algorithm object
     * @returns The equivalent `AlgorithmIdentifier`
     * @function
     * @public
     * @static
     */
    public static fromWebCrypto(
        algorithm: WebCryptoAlgorithmIdentifier,
    ): AlgorithmIdentifier {
        return AlgorithmIdentifier._fromMapping(mappingFromWebCrypto(algorithm));
    }

    /**
     * @summary Construct an `AlgorithmIdentifier` from a JOSE / JWA algorithm name
     * @param algorithm A JWA `alg` value such as `RS256`
     * @returns The equivalent `AlgorithmIdentifier`
     * @function
     * @public
     * @static
     */
    public static fromJOSE(algorithm: string): AlgorithmIdentifier {
        return AlgorithmIdentifier._fromMapping(mappingFromJOSE(algorithm));
    }

    /**
     * @summary Construct an `AlgorithmIdentifier` from a Java JCA / JCE name
     * @param algorithm A Java cryptographic algorithm name
     * @returns The equivalent `AlgorithmIdentifier`
     * @function
     * @public
     * @static
     */
    public static fromJava(algorithm: string): AlgorithmIdentifier {
        return AlgorithmIdentifier._fromMapping(mappingFromJava(algorithm));
    }

    /**
     * @summary Construct an `AlgorithmIdentifier` from a PKCS#11 mechanism name
     * @param algorithm A `CKM_*` mechanism name
     * @returns The equivalent `AlgorithmIdentifier`
     * @function
     * @public
     * @static
     */
    public static fromPKCS11(algorithm: string): AlgorithmIdentifier {
        return AlgorithmIdentifier._fromMapping(mappingFromPKCS11(algorithm));
    }

    private static _fromMapping(mapping: AlgorithmCryptoMapping): AlgorithmIdentifier {
        const parameters = mapping.nullParameters
            ? new DERElement(
                _TagClass.universal,
                _Construction.primitive,
                _UniversalType.nill,
            )
            : undefined
            ;
        return new AlgorithmIdentifier(
            _OID.fromString(mapping.oid),
            parameters,
        );
    }

    private static _nameFromMapping<K extends keyof AlgorithmCryptoMapping>(
        mapping: AlgorithmCryptoMapping | undefined,
        field: K,
        message: string,
    ): NonNullable<AlgorithmCryptoMapping[K]> {
        if (mapping === undefined) {
            throw new Error(message);
        }
        const name = mapping[field];
        if (name === undefined) {
            throw new Error(message);
        }
        return name;
    }
}

/**
 * @summary The Leading Root Component Types of AlgorithmIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AlgorithmIdentifier: $.ComponentSpec[] =
    [
        new $.ComponentSpec(
            "algorithm",
            false,
            $.hasTag(_TagClass.universal, 6)
        ),
        new $.ComponentSpec(
            "parameters",
            true,
            $.hasAnyTag
        ),
    ];

/**
 * @summary The Trailing Root Component Types of AlgorithmIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AlgorithmIdentifier: $.ComponentSpec[] =
    [];

/**
 * @summary The Extension Addition Component Types of AlgorithmIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AlgorithmIdentifier: $.ComponentSpec[] =
    [];

/**
 * @summary Decodes an ASN.1 element into a(n) AlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlgorithmIdentifier} The decoded data structure.
 */
export function _decode_AlgorithmIdentifier(el: _Element): AlgorithmIdentifier {
    const elements = el.sequence;
    if (elements.length < 1) {
        throw new _ConstructionError("AlgorithmIdentifier contained no elements.");
    }
    let [ alg_el, param_el, ...extensions ] = elements;
    return new AlgorithmIdentifier(
        $._decodeObjectIdentifier(alg_el),
        param_el,
        extensions
    );
}

/**
 * @summary Encodes a(n) AlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_AlgorithmIdentifier(value: AlgorithmIdentifier,
    _elGetter: $.ASN1Encoder<AlgorithmIdentifier>): _Element {
    const components: _Element[] = [
        /* REQUIRED   */ $._encodeObjectIdentifier(
            value.algorithm,
            $.DER
        ),
    ];
    if (value.parameters) {
        components.push(value.parameters);
    }
    components.push(...value._unrecognizedExtensionsList ?? []);
    return $._encodeSequence(components, $.DER);
}


/* eslint-enable */
