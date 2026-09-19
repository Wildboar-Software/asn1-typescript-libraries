/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OperatorId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OperatorId ::= SEQUENCE {
 *     mccMnc OCTET STRING (SIZE(3)), -- MCC&MNC coded as 3GPP TS 24.008
 *     gid1 OCTET STRING OPTIONAL, -- referring to content of EF GID1 (file identifier '6F3E') in 3GPP TS 31.102 [54]
 *     gid2 OCTET STRING OPTIONAL -- referring to content of EF GID2 (file identifier '6F3F') in 3GPP TS 31.102 [54]
 * }
 * ```
 * 
 * @class
 */
export
class OperatorId {
    constructor (
        /**
         * @summary `mccMnc`.
         * @public
         * @readonly
         */
        readonly mccMnc: OCTET_STRING,
        /**
         * @summary `gid1`.
         * @public
         * @readonly
         */
        readonly gid1: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `gid2`.
         * @public
         * @readonly
         */
        readonly gid2: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a OperatorId
     * @description
     * 
     * This takes an `object` and converts it to a `OperatorId`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OperatorId`.
     * @returns {OperatorId}
     */
    public static _from_object (_o: { [_K in keyof (OperatorId)]: (OperatorId)[_K] }): OperatorId {
        return new OperatorId(_o.mccMnc, _o.gid1, _o.gid2);
    }


}

/**
 * @summary The Leading Root Component Types of OperatorId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OperatorId: $.ComponentSpec[] = [
    new $.ComponentSpec("mccMnc", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("gid1", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gid2", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of OperatorId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OperatorId: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OperatorId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OperatorId: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OperatorId: $.ASN1Decoder<OperatorId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OperatorId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OperatorId (el: _Element): OperatorId {
    if (!_cached_decoder_for_OperatorId) { _cached_decoder_for_OperatorId = function (el: _Element): OperatorId {
    let mccMnc!: OCTET_STRING;
    let gid1: OPTIONAL<OCTET_STRING>;
    let gid2: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "mccMnc": (_el: _Element): void => { mccMnc = $._decodeOctetString(_el); },
        "gid1": (_el: _Element): void => { gid1 = $._decodeOctetString(_el); },
        "gid2": (_el: _Element): void => { gid2 = $._decodeOctetString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OperatorId,
        _extension_additions_list_spec_for_OperatorId,
        _root_component_type_list_2_spec_for_OperatorId,
        undefined,
    );
    return new OperatorId(
        mccMnc,
        gid1,
        gid2
    );
}; }
    return _cached_decoder_for_OperatorId(el);
}

let _cached_encoder_for_OperatorId: $.ASN1Encoder<OperatorId> | null = null;

/**
 * @summary Encodes a(n) OperatorId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OperatorId, encoded as an ASN.1 Element.
 */
export
function _encode_OperatorId (value: OperatorId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OperatorId) { _cached_encoder_for_OperatorId = function (value: OperatorId, elGetter: $.ASN1Encoder<OperatorId>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.mccMnc, $.BER),
            /* IF_ABSENT  */ ((value.gid1 === undefined) ? undefined : $._encodeOctetString(value.gid1, $.BER)),
            /* IF_ABSENT  */ ((value.gid2 === undefined) ? undefined : $._encodeOctetString(value.gid2, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_OperatorId(value, elGetter);
}


/* eslint-enable */
