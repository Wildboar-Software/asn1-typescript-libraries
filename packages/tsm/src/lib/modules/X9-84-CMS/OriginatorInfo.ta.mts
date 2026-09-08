/* eslint-disable */
import {
    OPTIONAL,
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
import { CertificateSet, _decode_CertificateSet, _encode_CertificateSet } from "../X9-84-CMS/CertificateSet.ta.mjs";

import { CertificateRevocationLists, _decode_CertificateRevocationLists, _encode_CertificateRevocationLists } from "../X9-84-CMS/CertificateRevocationLists.ta.mjs";



/**
 * @summary OriginatorInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OriginatorInfo ::= SEQUENCE {
 *    certs  [0] CertificateSet  OPTIONAL,
 *    crls   [1] CertificateRevocationLists  OPTIONAL
 * }
 * (ALL EXCEPT({ -- none; at least one component is present -- }))
 * ```
 * 
 * @class
 */
export
class OriginatorInfo {
    constructor (
        /**
         * @summary `certs`.
         * @public
         * @readonly
         */
        readonly certs: OPTIONAL<CertificateSet>,
        /**
         * @summary `crls`.
         * @public
         * @readonly
         */
        readonly crls: OPTIONAL<CertificateRevocationLists>
    ) {
        if (certs === undefined && crls === undefined) {
            throw new _ConstructionError("OriginatorInfo requires at least one component");
        }
    }

    /**
     * @summary Restructures an object into a OriginatorInfo
     * @description
     * 
     * This takes an `object` and converts it to a `OriginatorInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OriginatorInfo`.
     * @returns {OriginatorInfo}
     */
    public static _from_object (_o: { [_K in keyof (OriginatorInfo)]: (OriginatorInfo)[_K] }): OriginatorInfo {
        return new OriginatorInfo(_o.certs, _o.crls);
    }


}

/**
 * @summary The Leading Root Component Types of OriginatorInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OriginatorInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("certs", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("crls", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of OriginatorInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OriginatorInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OriginatorInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OriginatorInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OriginatorInfo: $.ASN1Decoder<OriginatorInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OriginatorInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OriginatorInfo (el: _Element): OriginatorInfo {
    if (!_cached_decoder_for_OriginatorInfo) { _cached_decoder_for_OriginatorInfo = function (el: _Element): OriginatorInfo {
    let certs: OPTIONAL<CertificateSet>;
    let crls: OPTIONAL<CertificateRevocationLists>;
    const callbacks: $.DecodingMap = {
        "certs": (_el: _Element): void => { certs = $._decode_implicit<CertificateSet>(() => _decode_CertificateSet)(_el); },
        "crls": (_el: _Element): void => { crls = $._decode_implicit<CertificateRevocationLists>(() => _decode_CertificateRevocationLists)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OriginatorInfo,
        _extension_additions_list_spec_for_OriginatorInfo,
        _root_component_type_list_2_spec_for_OriginatorInfo,
        undefined,
    );
    return new OriginatorInfo(
        certs,
        crls
    );
}; }
    return _cached_decoder_for_OriginatorInfo(el);
}

let _cached_encoder_for_OriginatorInfo: $.ASN1Encoder<OriginatorInfo> | null = null;

/**
 * @summary Encodes a(n) OriginatorInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatorInfo, encoded as an ASN.1 Element.
 */
export
function _encode_OriginatorInfo (value: OriginatorInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OriginatorInfo) { _cached_encoder_for_OriginatorInfo = function (value: OriginatorInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.certs === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CertificateSet, $.BER)(value.certs, $.BER)),
            /* IF_ABSENT  */ ((value.crls === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CertificateRevocationLists, $.BER)(value.crls, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_OriginatorInfo(value, elGetter);
}


/* eslint-enable */
