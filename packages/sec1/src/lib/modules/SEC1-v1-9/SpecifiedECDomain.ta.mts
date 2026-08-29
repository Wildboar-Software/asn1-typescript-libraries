/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SpecifiedECDomainVersion, _decode_SpecifiedECDomainVersion, _encode_SpecifiedECDomainVersion } from "../SEC1-v1-9/SpecifiedECDomainVersion.ta.mjs";
import { FieldID, _decode_FieldID, _encode_FieldID } from "../SEC1-v1-9/FieldID.ta.mjs";
import { Curve, _decode_Curve, _encode_Curve } from "../SEC1-v1-9/Curve.ta.mjs";
import { ECPoint, _decode_ECPoint, _encode_ECPoint } from "../SEC1-v1-9/ECPoint.ta.mjs";
import { HashAlgorithm, _decode_HashAlgorithm, _encode_HashAlgorithm } from "../SEC1-v1-9/HashAlgorithm.ta.mjs";
/**
 * @summary SpecifiedECDomain
 * @description
 *
 * Explicit elliptic curve domain parameters T. Over F_p that is `(p, a, b, G,
 * n, h)`; over F_2^m, `(m, f(x), a, b, G, n, h)`. Include the cofactor. Prefer
 * a named curve from SEC 2 when interoperability matters. [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §3.1, §C.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SpecifiedECDomain ::= SEQUENCE {
 *     version     SpecifiedECDomainVersion(ecdpVer1 | ecdpVer2 | ecdpVer3, ...),
 *     fieldID     FieldID {{FieldTypes}},
 *     curve       Curve,
 *     base        ECPoint,
 *     order       INTEGER,
 *     cofactor    INTEGER OPTIONAL,
 *     hash        HashAlgorithm OPTIONAL,
 *     ...
 * }
 * ```
 *
 */
export
class SpecifiedECDomain {
    constructor (
        /**
         * @summary `version`.
         * @description
         *
         * 1, 2, or 3. Version 2: curve and G verifiably random. Version 3: only G
         * verifiably random. Both require `curve.seed`. [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §C.2.
         *
         * @public
         * @readonly
         */
        readonly version: SpecifiedECDomainVersion,
        /**
         * @summary `fieldID`.
         * @description
         *
         * The field F_q over which the curve is defined. [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §C.1.
         *
         * @public
         * @readonly
         */
        readonly fieldID: FieldID,
        /**
         * @summary `curve`.
         * @description
         *
         * Coefficients (a, b) and optional generation seed. [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §C.2.
         *
         * @public
         * @readonly
         */
        readonly curve: Curve,
        /**
         * @summary `base`.
         * @description
         *
         * Base point G of prime order n, encoded as `ECPoint`. [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §3.1.
         *
         * @public
         * @readonly
         */
        readonly base: ECPoint,
        /**
         * @summary `order`.
         * @description
         *
         * Prime order n of G. The private key is in `[1, n-1]`. [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §3.1, §3.2.
         *
         * @public
         * @readonly
         */
        readonly order: INTEGER,
        /**
         * @summary `cofactor`.
         * @description
         *
         * h = #E(F_q) / n. Optional but strongly recommended for interoperability;
         * required input to cofactor DH. [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §3.1, §C.2.
         *
         * @public
         * @readonly
         */
        readonly cofactor?: OPTIONAL<INTEGER>,
        /**
         * @summary `hash`.
         * @description
         *
         * Hash used to generate the parameters verifiably at random (§3.1.3). [SEC 1 v2](https://www.secg.org/sec1-v2.pdf)
         * §C.2.
         *
         * @public
         * @readonly
         */
        readonly hash?: OPTIONAL<HashAlgorithm>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SpecifiedECDomain
     * @description
     *
     * This takes an `object` and converts it to a `SpecifiedECDomain`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SpecifiedECDomain`.
     * @returns {SpecifiedECDomain}
     */
    public static _from_object (_o: { [_K in keyof (SpecifiedECDomain)]: (SpecifiedECDomain)[_K] }): SpecifiedECDomain {
        return new SpecifiedECDomain(_o.version, _o.fieldID, _o.curve, _o.base, _o.order, _o.cofactor, _o.hash, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SpecifiedECDomain
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SpecifiedECDomain: $.ComponentSpec[] = [
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("fieldID", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("curve", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("base", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("order", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("cofactor", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("hash", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of SpecifiedECDomain
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SpecifiedECDomain: $.ComponentSpec[] = [

];

/**
 * @summary The Extension Addition Component Types of SpecifiedECDomain
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_SpecifiedECDomain: $.ComponentSpec[] = [

];

let _cached_decoder_for_SpecifiedECDomain: $.ASN1Decoder<SpecifiedECDomain> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SpecifiedECDomain
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SpecifiedECDomain} The decoded data structure.
 */
export
function _decode_SpecifiedECDomain (el: _Element): SpecifiedECDomain {
    if (!_cached_decoder_for_SpecifiedECDomain) { _cached_decoder_for_SpecifiedECDomain = function (el: _Element): SpecifiedECDomain {
    let version!: SpecifiedECDomainVersion;
    let fieldID!: FieldID;
    let curve!: Curve;
    let base!: ECPoint;
    let order!: INTEGER;
    let cofactor: OPTIONAL<INTEGER>;
    let hash: OPTIONAL<HashAlgorithm>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = _decode_SpecifiedECDomainVersion(_el); },
        "fieldID": (_el: _Element): void => { fieldID = _decode_FieldID(_el); },
        "curve": (_el: _Element): void => { curve = _decode_Curve(_el); },
        "base": (_el: _Element): void => { base = _decode_ECPoint(_el); },
        "order": (_el: _Element): void => { order = $._decodeInteger(_el); },
        "cofactor": (_el: _Element): void => { cofactor = $._decodeInteger(_el); },
        "hash": (_el: _Element): void => { hash = _decode_HashAlgorithm(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SpecifiedECDomain,
        _extension_additions_list_spec_for_SpecifiedECDomain,
        _root_component_type_list_2_spec_for_SpecifiedECDomain,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SpecifiedECDomain(
        version,
        fieldID,
        curve,
        base,
        order,
        cofactor,
        hash,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SpecifiedECDomain(el);
}

let _cached_encoder_for_SpecifiedECDomain: $.ASN1Encoder<SpecifiedECDomain> | null = null;

/**
 * @summary Encodes a(n) SpecifiedECDomain into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpecifiedECDomain, encoded as an ASN.1 Element.
 */
export
function _encode_SpecifiedECDomain (value: SpecifiedECDomain, elGetter: $.ASN1Encoder<SpecifiedECDomain>): _Element {
    if (!_cached_encoder_for_SpecifiedECDomain) { _cached_encoder_for_SpecifiedECDomain = function (value: SpecifiedECDomain): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SpecifiedECDomainVersion(value.version, $.DER),
            /* REQUIRED   */ _encode_FieldID(value.fieldID, $.DER),
            /* REQUIRED   */ _encode_Curve(value.curve, $.DER),
            /* REQUIRED   */ _encode_ECPoint(value.base, $.DER),
            /* REQUIRED   */ $._encodeInteger(value.order, $.DER),
            /* IF_ABSENT  */ ((value.cofactor === undefined) ? undefined : $._encodeInteger(value.cofactor, $.DER)),
            /* IF_ABSENT  */ ((value.hash === undefined) ? undefined : _encode_HashAlgorithm(value.hash, $.DER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.DER);
}; }
    return _cached_encoder_for_SpecifiedECDomain(value, elGetter);
}


/* eslint-enable */
