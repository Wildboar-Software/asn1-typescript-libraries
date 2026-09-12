/* eslint-disable */
import {
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
import { VariableAccessSpecification, _decode_VariableAccessSpecification, _encode_VariableAccessSpecification } from "../ISO-9506-MMS-1/VariableAccessSpecification.ta.mjs";
// export { VariableAccessSpecification, _decode_VariableAccessSpecification, _encode_VariableAccessSpecification } from "../ISO-9506-MMS-1/VariableAccessSpecification.ta.mjs";
import { AccessResult, _decode_AccessResult, _encode_AccessResult } from "../ISO-9506-MMS-1/AccessResult.ta.mjs";
// export { AccessResult, _decode_AccessResult, _encode_AccessResult } from "../ISO-9506-MMS-1/AccessResult.ta.mjs";


/**
 * @summary InformationReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InformationReport ::= SEQUENCE {
 *    variableAccessSpecification   VariableAccessSpecification,
 *    listOfAccessResult            [0] IMPLICIT SEQUENCE OF AccessResult }
 * ```
 * 
 * @class
 */
export
class InformationReport {
    constructor (
        /**
         * @summary `variableAccessSpecification`.
         * @public
         * @readonly
         */
        readonly variableAccessSpecification: VariableAccessSpecification,
        /**
         * @summary `listOfAccessResult`.
         * @public
         * @readonly
         */
        readonly listOfAccessResult: AccessResult[]
    ) {}

    /**
     * @summary Restructures an object into a InformationReport
     * @description
     * 
     * This takes an `object` and converts it to a `InformationReport`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InformationReport`.
     * @returns {InformationReport}
     */
    public static _from_object (_o: { [_K in keyof (InformationReport)]: (InformationReport)[_K] }): InformationReport {
        return new InformationReport(_o.variableAccessSpecification, _o.listOfAccessResult);
    }


}

/**
 * @summary The Leading Root Component Types of InformationReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InformationReport: $.ComponentSpec[] = [
    new $.ComponentSpec("variableAccessSpecification", false, $.hasAnyTag),
    new $.ComponentSpec("listOfAccessResult", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of InformationReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InformationReport: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InformationReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InformationReport: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_InformationReport: $.ASN1Decoder<InformationReport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InformationReport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InformationReport (el: _Element): InformationReport {
    if (!_cached_decoder_for_InformationReport) { _cached_decoder_for_InformationReport = function (el: _Element): InformationReport {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("InformationReport contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "variableAccessSpecification";
    sequence[1].name = "listOfAccessResult";
    let variableAccessSpecification!: VariableAccessSpecification;
    let listOfAccessResult!: AccessResult[];
    variableAccessSpecification = _decode_VariableAccessSpecification(sequence[0]);
    listOfAccessResult = $._decode_implicit<AccessResult[]>(() => $._decodeSequenceOf<AccessResult>(() => _decode_AccessResult))(sequence[1]);
    return new InformationReport(
        variableAccessSpecification,
        listOfAccessResult,

    );
}; }
    return _cached_decoder_for_InformationReport(el);
}

let _cached_encoder_for_InformationReport: $.ASN1Encoder<InformationReport> | null = null;

/**
 * @summary Encodes a(n) InformationReport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InformationReport, encoded as an ASN.1 Element.
 */
export
function _encode_InformationReport (value: InformationReport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InformationReport) { _cached_encoder_for_InformationReport = function (value: InformationReport): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_VariableAccessSpecification(value.variableAccessSpecification, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<AccessResult>(() => _encode_AccessResult, $.BER), $.BER)(value.listOfAccessResult, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_InformationReport(value, elGetter);
}


/* eslint-enable */
