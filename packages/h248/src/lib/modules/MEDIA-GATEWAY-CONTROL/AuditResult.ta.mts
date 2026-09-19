/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TerminationID, _decode_TerminationID, _encode_TerminationID } from "../MEDIA-GATEWAY-CONTROL/TerminationID.ta.mjs";
// export { TerminationID, _decode_TerminationID, _encode_TerminationID } from "../MEDIA-GATEWAY-CONTROL/TerminationID.ta.mjs";
import { TerminationAudit, _decode_TerminationAudit, _encode_TerminationAudit } from "../MEDIA-GATEWAY-CONTROL/TerminationAudit.ta.mjs";
// export { TerminationAudit, _decode_TerminationAudit, _encode_TerminationAudit } from "../MEDIA-GATEWAY-CONTROL/TerminationAudit.ta.mjs";


/**
 * @summary AuditResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuditResult ::= SEQUENCE
 *     {
 *         terminationID                [0] TerminationID,
 *         terminationAuditResult        [1] TerminationAudit
 *     }
 * ```
 * 
 * @class
 */
export
class AuditResult {
    constructor (
        /**
         * @summary `terminationID`.
         * @public
         * @readonly
         */
        readonly terminationID: TerminationID,
        /**
         * @summary `terminationAuditResult`.
         * @public
         * @readonly
         */
        readonly terminationAuditResult: TerminationAudit
    ) {}

    /**
     * @summary Restructures an object into a AuditResult
     * @description
     * 
     * This takes an `object` and converts it to a `AuditResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuditResult`.
     * @returns {AuditResult}
     */
    public static _from_object (_o: { [_K in keyof (AuditResult)]: (AuditResult)[_K] }): AuditResult {
        return new AuditResult(_o.terminationID, _o.terminationAuditResult);
    }


}

/**
 * @summary The Leading Root Component Types of AuditResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AuditResult: $.ComponentSpec[] = [
    new $.ComponentSpec("terminationID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("terminationAuditResult", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of AuditResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AuditResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AuditResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AuditResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AuditResult: $.ASN1Decoder<AuditResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuditResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuditResult (el: _Element): AuditResult {
    if (!_cached_decoder_for_AuditResult) { _cached_decoder_for_AuditResult = function (el: _Element): AuditResult {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("AuditResult contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "terminationID";
    sequence[1].name = "terminationAuditResult";
    let terminationID!: TerminationID;
    let terminationAuditResult!: TerminationAudit;
    terminationID = $._decode_implicit<TerminationID>(() => _decode_TerminationID)(sequence[0]);
    terminationAuditResult = $._decode_implicit<TerminationAudit>(() => _decode_TerminationAudit)(sequence[1]);
    return new AuditResult(
        terminationID,
        terminationAuditResult,

    );
}; }
    return _cached_decoder_for_AuditResult(el);
}

let _cached_encoder_for_AuditResult: $.ASN1Encoder<AuditResult> | null = null;

/**
 * @summary Encodes a(n) AuditResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuditResult, encoded as an ASN.1 Element.
 */
export
function _encode_AuditResult (value: AuditResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuditResult) { _cached_encoder_for_AuditResult = function (value: AuditResult, elGetter: $.ASN1Encoder<AuditResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TerminationID, $.BER)(value.terminationID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_TerminationAudit, $.BER)(value.terminationAuditResult, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AuditResult(value, elGetter);
}


/* eslint-enable */
