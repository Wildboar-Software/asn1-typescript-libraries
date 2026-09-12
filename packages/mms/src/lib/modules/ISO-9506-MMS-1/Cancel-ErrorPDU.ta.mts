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
import { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
// export { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
import { ServiceError, _decode_ServiceError, _encode_ServiceError } from "../ISO-9506-MMS-1/ServiceError.ta.mjs";
// export { ServiceError, _decode_ServiceError, _encode_ServiceError } from "../ISO-9506-MMS-1/ServiceError.ta.mjs";


/**
 * @summary Cancel_ErrorPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Cancel-ErrorPDU ::= SEQUENCE {
 *    originalInvokeID       [0] IMPLICIT Unsigned32,
 *    serviceError           [1] IMPLICIT ServiceError
 *    }
 * ```
 * 
 * @class
 */
export
class Cancel_ErrorPDU {
    constructor (
        /**
         * @summary `originalInvokeID`.
         * @public
         * @readonly
         */
        readonly originalInvokeID: Unsigned32,
        /**
         * @summary `serviceError`.
         * @public
         * @readonly
         */
        readonly serviceError: ServiceError
    ) {}

    /**
     * @summary Restructures an object into a Cancel_ErrorPDU
     * @description
     * 
     * This takes an `object` and converts it to a `Cancel_ErrorPDU`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Cancel_ErrorPDU`.
     * @returns {Cancel_ErrorPDU}
     */
    public static _from_object (_o: { [_K in keyof (Cancel_ErrorPDU)]: (Cancel_ErrorPDU)[_K] }): Cancel_ErrorPDU {
        return new Cancel_ErrorPDU(_o.originalInvokeID, _o.serviceError);
    }


}

/**
 * @summary The Leading Root Component Types of Cancel_ErrorPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Cancel_ErrorPDU: $.ComponentSpec[] = [
    new $.ComponentSpec("originalInvokeID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("serviceError", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of Cancel_ErrorPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Cancel_ErrorPDU: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Cancel_ErrorPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Cancel_ErrorPDU: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Cancel_ErrorPDU: $.ASN1Decoder<Cancel_ErrorPDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Cancel_ErrorPDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Cancel_ErrorPDU (el: _Element): Cancel_ErrorPDU {
    if (!_cached_decoder_for_Cancel_ErrorPDU) { _cached_decoder_for_Cancel_ErrorPDU = function (el: _Element): Cancel_ErrorPDU {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Cancel-ErrorPDU contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "originalInvokeID";
    sequence[1].name = "serviceError";
    let originalInvokeID!: Unsigned32;
    let serviceError!: ServiceError;
    originalInvokeID = $._decode_implicit<Unsigned32>(() => _decode_Unsigned32)(sequence[0]);
    serviceError = $._decode_implicit<ServiceError>(() => _decode_ServiceError)(sequence[1]);
    return new Cancel_ErrorPDU(
        originalInvokeID,
        serviceError,

    );
}; }
    return _cached_decoder_for_Cancel_ErrorPDU(el);
}

let _cached_encoder_for_Cancel_ErrorPDU: $.ASN1Encoder<Cancel_ErrorPDU> | null = null;

/**
 * @summary Encodes a(n) Cancel_ErrorPDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Cancel_ErrorPDU, encoded as an ASN.1 Element.
 */
export
function _encode_Cancel_ErrorPDU (value: Cancel_ErrorPDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Cancel_ErrorPDU) { _cached_encoder_for_Cancel_ErrorPDU = function (value: Cancel_ErrorPDU): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Unsigned32, $.BER)(value.originalInvokeID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ServiceError, $.BER)(value.serviceError, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Cancel_ErrorPDU(value, elGetter);
}


/* eslint-enable */
