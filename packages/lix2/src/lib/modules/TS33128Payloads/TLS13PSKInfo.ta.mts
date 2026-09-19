/* eslint-disable */
import {
    OCTET_STRING,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TLS13PSKIdentity, _decode_TLS13PSKIdentity, _encode_TLS13PSKIdentity } from "../TS33128Payloads/TLS13PSKIdentity.ta.mjs";
// export { TLS13PSKIdentity, _decode_TLS13PSKIdentity, _encode_TLS13PSKIdentity } from "../TS33128Payloads/TLS13PSKIdentity.ta.mjs";
import { TLS13PSKKeyExchangeMode, _decode_TLS13PSKKeyExchangeMode, _encode_TLS13PSKKeyExchangeMode, _enum_for_TLS13PSKKeyExchangeMode } from "../TS33128Payloads/TLS13PSKKeyExchangeMode.ta.mjs";
// export { TLS13PSKKeyExchangeMode, _enum_for_TLS13PSKKeyExchangeMode, TLS13PSKKeyExchangeMode_pSKKE /* IMPORTED_LONG_ENUMERATION_ITEM */, pSKKE /* IMPORTED_SHORT_ENUMERATION_ITEM */, TLS13PSKKeyExchangeMode_pSKDHEKE /* IMPORTED_LONG_ENUMERATION_ITEM */, pSKDHEKE /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TLS13PSKKeyExchangeMode, _encode_TLS13PSKKeyExchangeMode } from "../TS33128Payloads/TLS13PSKKeyExchangeMode.ta.mjs";
import { TLS13PSKHashAlgorithm, _decode_TLS13PSKHashAlgorithm, _encode_TLS13PSKHashAlgorithm, _enum_for_TLS13PSKHashAlgorithm } from "../TS33128Payloads/TLS13PSKHashAlgorithm.ta.mjs";
// export { TLS13PSKHashAlgorithm, _enum_for_TLS13PSKHashAlgorithm, TLS13PSKHashAlgorithm_sha256 /* IMPORTED_LONG_ENUMERATION_ITEM */, sha256 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TLS13PSKHashAlgorithm_sha384 /* IMPORTED_LONG_ENUMERATION_ITEM */, sha384 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TLS13PSKHashAlgorithm_sha512 /* IMPORTED_LONG_ENUMERATION_ITEM */, sha512 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TLS13PSKHashAlgorithm, _encode_TLS13PSKHashAlgorithm } from "../TS33128Payloads/TLS13PSKHashAlgorithm.ta.mjs";


/**
 * @summary TLS13PSKInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13PSKInfo ::= SEQUENCE
 * {
 *     pSKIdentity        [1] TLS13PSKIdentity,
 *     pSKValue           [2] OCTET STRING,
 *     pSKKeyExchangeMode [3] TLS13PSKKeyExchangeMode,
 *     hashAlgorithm      [4] TLS13PSKHashAlgorithm
 * }
 * ```
 * 
 * @class
 */
export
class TLS13PSKInfo {
    constructor (
        /**
         * @summary `pSKIdentity`.
         * @public
         * @readonly
         */
        readonly pSKIdentity: TLS13PSKIdentity,
        /**
         * @summary `pSKValue`.
         * @public
         * @readonly
         */
        readonly pSKValue: OCTET_STRING,
        /**
         * @summary `pSKKeyExchangeMode`.
         * @public
         * @readonly
         */
        readonly pSKKeyExchangeMode: TLS13PSKKeyExchangeMode,
        /**
         * @summary `hashAlgorithm`.
         * @public
         * @readonly
         */
        readonly hashAlgorithm: TLS13PSKHashAlgorithm
    ) {}

    /**
     * @summary Restructures an object into a TLS13PSKInfo
     * @description
     * 
     * This takes an `object` and converts it to a `TLS13PSKInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TLS13PSKInfo`.
     * @returns {TLS13PSKInfo}
     */
    public static _from_object (_o: { [_K in keyof (TLS13PSKInfo)]: (TLS13PSKInfo)[_K] }): TLS13PSKInfo {
        return new TLS13PSKInfo(_o.pSKIdentity, _o.pSKValue, _o.pSKKeyExchangeMode, _o.hashAlgorithm);
    }

        /**
         * @summary The enum used as the type of the component `pSKKeyExchangeMode`
         * @public
         * @static
         */

    public static _enum_for_pSKKeyExchangeMode = _enum_for_TLS13PSKKeyExchangeMode;        /**
         * @summary The enum used as the type of the component `hashAlgorithm`
         * @public
         * @static
         */

    public static _enum_for_hashAlgorithm = _enum_for_TLS13PSKHashAlgorithm;
}

/**
 * @summary The Leading Root Component Types of TLS13PSKInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TLS13PSKInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("pSKIdentity", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pSKValue", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pSKKeyExchangeMode", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("hashAlgorithm", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of TLS13PSKInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TLS13PSKInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TLS13PSKInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TLS13PSKInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TLS13PSKInfo: $.ASN1Decoder<TLS13PSKInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TLS13PSKInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TLS13PSKInfo (el: _Element): TLS13PSKInfo {
    if (!_cached_decoder_for_TLS13PSKInfo) { _cached_decoder_for_TLS13PSKInfo = function (el: _Element): TLS13PSKInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("TLS13PSKInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "pSKIdentity";
    sequence[1].name = "pSKValue";
    sequence[2].name = "pSKKeyExchangeMode";
    sequence[3].name = "hashAlgorithm";
    let pSKIdentity!: TLS13PSKIdentity;
    let pSKValue!: OCTET_STRING;
    let pSKKeyExchangeMode!: TLS13PSKKeyExchangeMode;
    let hashAlgorithm!: TLS13PSKHashAlgorithm;
    pSKIdentity = $._decode_implicit<TLS13PSKIdentity>(() => _decode_TLS13PSKIdentity)(sequence[0]);
    pSKValue = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    pSKKeyExchangeMode = $._decode_implicit<TLS13PSKKeyExchangeMode>(() => _decode_TLS13PSKKeyExchangeMode)(sequence[2]);
    hashAlgorithm = $._decode_implicit<TLS13PSKHashAlgorithm>(() => _decode_TLS13PSKHashAlgorithm)(sequence[3]);
    return new TLS13PSKInfo(
        pSKIdentity,
        pSKValue,
        pSKKeyExchangeMode,
        hashAlgorithm,

    );
}; }
    return _cached_decoder_for_TLS13PSKInfo(el);
}

let _cached_encoder_for_TLS13PSKInfo: $.ASN1Encoder<TLS13PSKInfo> | null = null;

/**
 * @summary Encodes a(n) TLS13PSKInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TLS13PSKInfo, encoded as an ASN.1 Element.
 */
export
function _encode_TLS13PSKInfo (value: TLS13PSKInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TLS13PSKInfo) { _cached_encoder_for_TLS13PSKInfo = function (value: TLS13PSKInfo, elGetter: $.ASN1Encoder<TLS13PSKInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_TLS13PSKIdentity, $.BER)(value.pSKIdentity, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.pSKValue, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_TLS13PSKKeyExchangeMode, $.BER)(value.pSKKeyExchangeMode, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_TLS13PSKHashAlgorithm, $.BER)(value.hashAlgorithm, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TLS13PSKInfo(value, elGetter);
}


/* eslint-enable */
