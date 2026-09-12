/* eslint-disable */
import {
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
import { CS_GetProgramInvocationAttributes_Response_control, _decode_CS_GetProgramInvocationAttributes_Response_control, _encode_CS_GetProgramInvocationAttributes_Response_control } from "../ISO-9506-MMS-1/CS-GetProgramInvocationAttributes-Response-control.ta.mjs";
// export { CS_GetProgramInvocationAttributes_Response_control, _decode_CS_GetProgramInvocationAttributes_Response_control, _encode_CS_GetProgramInvocationAttributes_Response_control } from "../ISO-9506-MMS-1/CS-GetProgramInvocationAttributes-Response-control.ta.mjs";


/**
 * @summary CS_GetProgramInvocationAttributes_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CS-GetProgramInvocationAttributes-Response ::= SEQUENCE {
 *    errorCode                     [0] IMPLICIT INTEGER,
 *    control                       [1] CHOICE {
 *        controlling                   [0] IMPLICIT SEQUENCE {
 *           controlledPI                  [0] IMPLICIT SEQUENCE OF Identifier,
 *           programLocation               [1] IMPLICIT VisibleString OPTIONAL,
 *           runningMode                   [2] CHOICE {
 *              freeRunning                   [0] IMPLICIT NULL,
 *              cycleLimited                  [1] IMPLICIT INTEGER,
 *              stepLimited                   [2] IMPLICIT INTEGER  }
 *           },
 *        controlled                    [1] CHOICE {
 *           controllingPI                 [0] IMPLICIT Identifier,
 *           none                          [1] IMPLICIT NULL
 *        },
 *        normal                           [2] IMPLICIT NULL   }  }
 * ```
 * 
 * @class
 */
export
class CS_GetProgramInvocationAttributes_Response {
    constructor (
        /**
         * @summary `errorCode`.
         * @public
         * @readonly
         */
        readonly errorCode: INTEGER,
        /**
         * @summary `control`.
         * @public
         * @readonly
         */
        readonly control: CS_GetProgramInvocationAttributes_Response_control
    ) {}

    /**
     * @summary Restructures an object into a CS_GetProgramInvocationAttributes_Response
     * @description
     * 
     * This takes an `object` and converts it to a `CS_GetProgramInvocationAttributes_Response`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CS_GetProgramInvocationAttributes_Response`.
     * @returns {CS_GetProgramInvocationAttributes_Response}
     */
    public static _from_object (_o: { [_K in keyof (CS_GetProgramInvocationAttributes_Response)]: (CS_GetProgramInvocationAttributes_Response)[_K] }): CS_GetProgramInvocationAttributes_Response {
        return new CS_GetProgramInvocationAttributes_Response(_o.errorCode, _o.control);
    }


}

/**
 * @summary The Leading Root Component Types of CS_GetProgramInvocationAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CS_GetProgramInvocationAttributes_Response: $.ComponentSpec[] = [
    new $.ComponentSpec("errorCode", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("control", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of CS_GetProgramInvocationAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CS_GetProgramInvocationAttributes_Response: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CS_GetProgramInvocationAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CS_GetProgramInvocationAttributes_Response: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CS_GetProgramInvocationAttributes_Response: $.ASN1Decoder<CS_GetProgramInvocationAttributes_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CS_GetProgramInvocationAttributes_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CS_GetProgramInvocationAttributes_Response (el: _Element): CS_GetProgramInvocationAttributes_Response {
    if (!_cached_decoder_for_CS_GetProgramInvocationAttributes_Response) { _cached_decoder_for_CS_GetProgramInvocationAttributes_Response = function (el: _Element): CS_GetProgramInvocationAttributes_Response {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CS-GetProgramInvocationAttributes-Response contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "errorCode";
    sequence[1].name = "control";
    let errorCode!: INTEGER;
    let control!: CS_GetProgramInvocationAttributes_Response_control;
    errorCode = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    control = $._decode_explicit<CS_GetProgramInvocationAttributes_Response_control>(() => _decode_CS_GetProgramInvocationAttributes_Response_control)(sequence[1]);
    return new CS_GetProgramInvocationAttributes_Response(
        errorCode,
        control,

    );
}; }
    return _cached_decoder_for_CS_GetProgramInvocationAttributes_Response(el);
}

let _cached_encoder_for_CS_GetProgramInvocationAttributes_Response: $.ASN1Encoder<CS_GetProgramInvocationAttributes_Response> | null = null;

/**
 * @summary Encodes a(n) CS_GetProgramInvocationAttributes_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CS_GetProgramInvocationAttributes_Response, encoded as an ASN.1 Element.
 */
export
function _encode_CS_GetProgramInvocationAttributes_Response (value: CS_GetProgramInvocationAttributes_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CS_GetProgramInvocationAttributes_Response) { _cached_encoder_for_CS_GetProgramInvocationAttributes_Response = function (value: CS_GetProgramInvocationAttributes_Response): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.errorCode, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_CS_GetProgramInvocationAttributes_Response_control, $.BER)(value.control, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CS_GetProgramInvocationAttributes_Response(value, elGetter);
}


/* eslint-enable */
