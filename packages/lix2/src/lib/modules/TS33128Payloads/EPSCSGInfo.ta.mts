/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CSGID, _decode_CSGID, _encode_CSGID } from "../TS33128Payloads/CSGID.ta.mjs";
// export { CSGID, _decode_CSGID, _encode_CSGID } from "../TS33128Payloads/CSGID.ta.mjs";
import { CSGMembershipIndication, _decode_CSGMembershipIndication, _encode_CSGMembershipIndication, _enum_for_CSGMembershipIndication } from "../TS33128Payloads/CSGMembershipIndication.ta.mjs";
// export { CSGMembershipIndication, _enum_for_CSGMembershipIndication, CSGMembershipIndication_notCSGMember /* IMPORTED_LONG_ENUMERATION_ITEM */, notCSGMember /* IMPORTED_SHORT_ENUMERATION_ITEM */, CSGMembershipIndication_cSGMember /* IMPORTED_LONG_ENUMERATION_ITEM */, cSGMember /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CSGMembershipIndication, _encode_CSGMembershipIndication } from "../TS33128Payloads/CSGMembershipIndication.ta.mjs";


/**
 * @summary EPSCSGInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSCSGInfo ::= SEQUENCE
 * {
 *     cSGID               [1] CSGID OPTIONAL,
 *     cSGMembershipStatus [2] CSGMembershipIndication OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EPSCSGInfo {
    constructor (
        /**
         * @summary `cSGID`.
         * @public
         * @readonly
         */
        readonly cSGID: OPTIONAL<CSGID>,
        /**
         * @summary `cSGMembershipStatus`.
         * @public
         * @readonly
         */
        readonly cSGMembershipStatus: OPTIONAL<CSGMembershipIndication>
    ) {}

    /**
     * @summary Restructures an object into a EPSCSGInfo
     * @description
     * 
     * This takes an `object` and converts it to a `EPSCSGInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPSCSGInfo`.
     * @returns {EPSCSGInfo}
     */
    public static _from_object (_o: { [_K in keyof (EPSCSGInfo)]: (EPSCSGInfo)[_K] }): EPSCSGInfo {
        return new EPSCSGInfo(_o.cSGID, _o.cSGMembershipStatus);
    }

        /**
         * @summary The enum used as the type of the component `cSGMembershipStatus`
         * @public
         * @static
         */

    public static _enum_for_cSGMembershipStatus = _enum_for_CSGMembershipIndication;
}

/**
 * @summary The Leading Root Component Types of EPSCSGInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPSCSGInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("cSGID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cSGMembershipStatus", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of EPSCSGInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPSCSGInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPSCSGInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPSCSGInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EPSCSGInfo: $.ASN1Decoder<EPSCSGInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSCSGInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSCSGInfo (el: _Element): EPSCSGInfo {
    if (!_cached_decoder_for_EPSCSGInfo) { _cached_decoder_for_EPSCSGInfo = function (el: _Element): EPSCSGInfo {
    let cSGID: OPTIONAL<CSGID>;
    let cSGMembershipStatus: OPTIONAL<CSGMembershipIndication>;
    const callbacks: $.DecodingMap = {
        "cSGID": (_el: _Element): void => { cSGID = $._decode_implicit<CSGID>(() => _decode_CSGID)(_el); },
        "cSGMembershipStatus": (_el: _Element): void => { cSGMembershipStatus = $._decode_implicit<CSGMembershipIndication>(() => _decode_CSGMembershipIndication)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EPSCSGInfo,
        _extension_additions_list_spec_for_EPSCSGInfo,
        _root_component_type_list_2_spec_for_EPSCSGInfo,
        undefined,
    );
    return new EPSCSGInfo(
        cSGID,
        cSGMembershipStatus
    );
}; }
    return _cached_decoder_for_EPSCSGInfo(el);
}

let _cached_encoder_for_EPSCSGInfo: $.ASN1Encoder<EPSCSGInfo> | null = null;

/**
 * @summary Encodes a(n) EPSCSGInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSCSGInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EPSCSGInfo (value: EPSCSGInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSCSGInfo) { _cached_encoder_for_EPSCSGInfo = function (value: EPSCSGInfo, elGetter: $.ASN1Encoder<EPSCSGInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.cSGID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CSGID, $.BER)(value.cSGID, $.BER)),
            /* IF_ABSENT  */ ((value.cSGMembershipStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CSGMembershipIndication, $.BER)(value.cSGMembershipStatus, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EPSCSGInfo(value, elGetter);
}


/* eslint-enable */
