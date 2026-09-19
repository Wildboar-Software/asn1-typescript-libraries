/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FTEID, _decode_FTEID, _encode_FTEID } from "../TS33128Payloads/FTEID.ta.mjs";
// export { FTEID, _decode_FTEID, _encode_FTEID } from "../TS33128Payloads/FTEID.ta.mjs";
import { EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
// export { EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";


/**
 * @summary EPSPDNCnxInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSPDNCnxInfo ::= SEQUENCE
 * {
 *     pGWS8ControlPlaneFTEID [1] FTEID,
 *     linkedBearerID         [2] EPSBearerID OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EPSPDNCnxInfo {
    constructor (
        /**
         * @summary `pGWS8ControlPlaneFTEID`.
         * @public
         * @readonly
         */
        readonly pGWS8ControlPlaneFTEID: FTEID,
        /**
         * @summary `linkedBearerID`.
         * @public
         * @readonly
         */
        readonly linkedBearerID: OPTIONAL<EPSBearerID>
    ) {}

    /**
     * @summary Restructures an object into a EPSPDNCnxInfo
     * @description
     * 
     * This takes an `object` and converts it to a `EPSPDNCnxInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPSPDNCnxInfo`.
     * @returns {EPSPDNCnxInfo}
     */
    public static _from_object (_o: { [_K in keyof (EPSPDNCnxInfo)]: (EPSPDNCnxInfo)[_K] }): EPSPDNCnxInfo {
        return new EPSPDNCnxInfo(_o.pGWS8ControlPlaneFTEID, _o.linkedBearerID);
    }


}

/**
 * @summary The Leading Root Component Types of EPSPDNCnxInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPSPDNCnxInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("pGWS8ControlPlaneFTEID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("linkedBearerID", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of EPSPDNCnxInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPSPDNCnxInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPSPDNCnxInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPSPDNCnxInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EPSPDNCnxInfo: $.ASN1Decoder<EPSPDNCnxInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSPDNCnxInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSPDNCnxInfo (el: _Element): EPSPDNCnxInfo {
    if (!_cached_decoder_for_EPSPDNCnxInfo) { _cached_decoder_for_EPSPDNCnxInfo = function (el: _Element): EPSPDNCnxInfo {
    let pGWS8ControlPlaneFTEID!: FTEID;
    let linkedBearerID: OPTIONAL<EPSBearerID>;
    const callbacks: $.DecodingMap = {
        "pGWS8ControlPlaneFTEID": (_el: _Element): void => { pGWS8ControlPlaneFTEID = $._decode_implicit<FTEID>(() => _decode_FTEID)(_el); },
        "linkedBearerID": (_el: _Element): void => { linkedBearerID = $._decode_implicit<EPSBearerID>(() => _decode_EPSBearerID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EPSPDNCnxInfo,
        _extension_additions_list_spec_for_EPSPDNCnxInfo,
        _root_component_type_list_2_spec_for_EPSPDNCnxInfo,
        undefined,
    );
    return new EPSPDNCnxInfo(
        pGWS8ControlPlaneFTEID,
        linkedBearerID
    );
}; }
    return _cached_decoder_for_EPSPDNCnxInfo(el);
}

let _cached_encoder_for_EPSPDNCnxInfo: $.ASN1Encoder<EPSPDNCnxInfo> | null = null;

/**
 * @summary Encodes a(n) EPSPDNCnxInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSPDNCnxInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EPSPDNCnxInfo (value: EPSPDNCnxInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSPDNCnxInfo) { _cached_encoder_for_EPSPDNCnxInfo = function (value: EPSPDNCnxInfo, elGetter: $.ASN1Encoder<EPSPDNCnxInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_FTEID, $.BER)(value.pGWS8ControlPlaneFTEID, $.BER),
            /* IF_ABSENT  */ ((value.linkedBearerID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_EPSBearerID, $.BER)(value.linkedBearerID, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EPSPDNCnxInfo(value, elGetter);
}


/* eslint-enable */
