/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type IMSIorIMEI, _decode_IMSIorIMEI, _encode_IMSIorIMEI } from "../CSChargingDataTypes/IMSIorIMEI.ta.mjs";


/**
 * @summary EmergencyCallIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EmergencyCallIndication ::= SEQUENCE {
 *    cellId     [0] IMPLICIT OCTET STRING ( SIZE( 2 ) ),
 *    callerId   [1] IMSIorIMEI}
 * ```
 * 
 * @class
 */
export
class EmergencyCallIndication {
    /**
     * @summary `cellId`.
     * @public
     * @readonly
     */
    readonly cellId: OCTET_STRING;
    /**
     * @summary `callerId`.
     * @public
     * @readonly
     */
    readonly callerId: IMSIorIMEI;

    constructor (
        cellId: OCTET_STRING,
        callerId: IMSIorIMEI
    ) {
        this.cellId = cellId;
        this.callerId = callerId;
    
        if ((this.cellId.length !== 2)) {
            throw new ASN1SizeError("EmergencyCallIndication.cellId violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a EmergencyCallIndication
     * @description
     *
     * This takes an `object` and converts it to a `EmergencyCallIndication`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EmergencyCallIndication`.
     * @returns {EmergencyCallIndication}
     */
    public static _from_object (_o: { [_K in keyof (EmergencyCallIndication)]: (EmergencyCallIndication)[_K] }): EmergencyCallIndication {
        return new EmergencyCallIndication(_o.cellId, _o.callerId);
    }


}

/**
 * @summary The Leading Root Component Types of EmergencyCallIndication
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EmergencyCallIndication: $.ComponentSpec[] = [
    new $.ComponentSpec("cellId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("callerId", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of EmergencyCallIndication
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EmergencyCallIndication: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EmergencyCallIndication
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _extension_additions_list_spec_for_EmergencyCallIndication: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EmergencyCallIndication: $.ASN1Decoder<EmergencyCallIndication> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EmergencyCallIndication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EmergencyCallIndication (el: _Element): EmergencyCallIndication {
    if (!_cached_decoder_for_EmergencyCallIndication) { _cached_decoder_for_EmergencyCallIndication = function (el: _Element): EmergencyCallIndication {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("EmergencyCallIndication contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "cellId";
    sequence[1].name = "callerId";
    const cellId: OCTET_STRING = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[0]);
    const callerId: IMSIorIMEI = $._decode_explicit<IMSIorIMEI>(() => _decode_IMSIorIMEI)(sequence[1]);
    return new EmergencyCallIndication(
        cellId,
        callerId,

    );
}; }
    return _cached_decoder_for_EmergencyCallIndication(el);
}

let _cached_encoder_for_EmergencyCallIndication: $.ASN1Encoder<EmergencyCallIndication> | null = null;

/**
 * @summary Encodes a(n) EmergencyCallIndication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EmergencyCallIndication, encoded as an ASN.1 Element.
 */
export
function _encode_EmergencyCallIndication (value: EmergencyCallIndication, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EmergencyCallIndication) { _cached_encoder_for_EmergencyCallIndication = function (value: EmergencyCallIndication, _elGetter: $.ASN1Encoder<EmergencyCallIndication>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.cellId, $.BER),
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_IMSIorIMEI, $.BER)(value.callerId, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_EmergencyCallIndication(value, elGetter);
}


/* eslint-enable */
