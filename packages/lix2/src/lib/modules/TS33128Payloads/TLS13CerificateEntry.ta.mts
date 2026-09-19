/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TLS13CertificateType, _decode_TLS13CertificateType, _encode_TLS13CertificateType, _enum_for_TLS13CertificateType } from "../TS33128Payloads/TLS13CertificateType.ta.mjs";
// export { TLS13CertificateType, _enum_for_TLS13CertificateType, TLS13CertificateType_x509 /* IMPORTED_LONG_ENUMERATION_ITEM */, x509 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TLS13CertificateType_rawPublicKey /* IMPORTED_LONG_ENUMERATION_ITEM */, rawPublicKey /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TLS13CertificateType, _encode_TLS13CertificateType } from "../TS33128Payloads/TLS13CertificateType.ta.mjs";
import { TLS13Extension, _decode_TLS13Extension, _encode_TLS13Extension } from "../TS33128Payloads/TLS13Extension.ta.mjs";
// export { TLS13Extension, _decode_TLS13Extension, _encode_TLS13Extension } from "../TS33128Payloads/TLS13Extension.ta.mjs";


/**
 * @summary TLS13CerificateEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13CerificateEntry ::= SEQUENCE
 * {
 *     tLSCertificateType [1] TLS13CertificateType,
 *     tLSCertificateData [2] OCTET STRING (SIZE(1..16777215)),
 *     extensions         [3] SEQUENCE OF TLS13Extension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TLS13CerificateEntry {
    constructor (
        /**
         * @summary `tLSCertificateType`.
         * @public
         * @readonly
         */
        readonly tLSCertificateType: TLS13CertificateType,
        /**
         * @summary `tLSCertificateData`.
         * @public
         * @readonly
         */
        readonly tLSCertificateData: OCTET_STRING,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<TLS13Extension[]>
    ) {}

    /**
     * @summary Restructures an object into a TLS13CerificateEntry
     * @description
     * 
     * This takes an `object` and converts it to a `TLS13CerificateEntry`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TLS13CerificateEntry`.
     * @returns {TLS13CerificateEntry}
     */
    public static _from_object (_o: { [_K in keyof (TLS13CerificateEntry)]: (TLS13CerificateEntry)[_K] }): TLS13CerificateEntry {
        return new TLS13CerificateEntry(_o.tLSCertificateType, _o.tLSCertificateData, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `tLSCertificateType`
         * @public
         * @static
         */

    public static _enum_for_tLSCertificateType = _enum_for_TLS13CertificateType;
}

/**
 * @summary The Leading Root Component Types of TLS13CerificateEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TLS13CerificateEntry: $.ComponentSpec[] = [
    new $.ComponentSpec("tLSCertificateType", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("tLSCertificateData", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of TLS13CerificateEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TLS13CerificateEntry: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TLS13CerificateEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TLS13CerificateEntry: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TLS13CerificateEntry: $.ASN1Decoder<TLS13CerificateEntry> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TLS13CerificateEntry
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TLS13CerificateEntry (el: _Element): TLS13CerificateEntry {
    if (!_cached_decoder_for_TLS13CerificateEntry) { _cached_decoder_for_TLS13CerificateEntry = function (el: _Element): TLS13CerificateEntry {
    let tLSCertificateType!: TLS13CertificateType;
    let tLSCertificateData!: OCTET_STRING;
    let extensions: OPTIONAL<TLS13Extension[]>;
    const callbacks: $.DecodingMap = {
        "tLSCertificateType": (_el: _Element): void => { tLSCertificateType = $._decode_implicit<TLS13CertificateType>(() => _decode_TLS13CertificateType)(_el); },
        "tLSCertificateData": (_el: _Element): void => { tLSCertificateData = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<TLS13Extension[]>(() => $._decodeSequenceOf<TLS13Extension>(() => _decode_TLS13Extension))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TLS13CerificateEntry,
        _extension_additions_list_spec_for_TLS13CerificateEntry,
        _root_component_type_list_2_spec_for_TLS13CerificateEntry,
        undefined,
    );
    return new TLS13CerificateEntry(
        tLSCertificateType,
        tLSCertificateData,
        extensions
    );
}; }
    return _cached_decoder_for_TLS13CerificateEntry(el);
}

let _cached_encoder_for_TLS13CerificateEntry: $.ASN1Encoder<TLS13CerificateEntry> | null = null;

/**
 * @summary Encodes a(n) TLS13CerificateEntry into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TLS13CerificateEntry, encoded as an ASN.1 Element.
 */
export
function _encode_TLS13CerificateEntry (value: TLS13CerificateEntry, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TLS13CerificateEntry) { _cached_encoder_for_TLS13CerificateEntry = function (value: TLS13CerificateEntry, elGetter: $.ASN1Encoder<TLS13CerificateEntry>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_TLS13CertificateType, $.BER)(value.tLSCertificateType, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.tLSCertificateData, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<TLS13Extension>(() => _encode_TLS13Extension, $.BER), $.BER)(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TLS13CerificateEntry(value, elGetter);
}


/* eslint-enable */
