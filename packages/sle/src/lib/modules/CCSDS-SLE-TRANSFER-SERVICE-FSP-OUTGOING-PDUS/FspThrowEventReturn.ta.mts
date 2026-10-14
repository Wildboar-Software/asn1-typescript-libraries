/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";
import { IntUnsignedLong, _decode_IntUnsignedLong, _encode_IntUnsignedLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedLong.ta.mjs";
import { FspThrowEventReturn_result, _decode_FspThrowEventReturn_result, _encode_FspThrowEventReturn_result } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-OUTGOING-PDUS/FspThrowEventReturn-result.ta.mjs";


/**
 * @summary FspThrowEventReturn
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspThrowEventReturn ::= SEQUENCE
 * {  performerCredentials    Credentials
 * ,  invokeId                InvokeId
 * ,  eventInvokeId           IntUnsignedLong
 * ,  result                  CHOICE
 *    {  positiveResult    [0]   NULL
 *    ,  negativeResult    [1]   DiagnosticFspThrowEvent
 *    }
 * }
 * ```
 * 
 * @class
 */
export
class FspThrowEventReturn {
    /**
     * @summary `performerCredentials`.
     * @public
     * @readonly
     */
    readonly performerCredentials: Credentials;
    /**
     * @summary `invokeId`.
     * @public
     * @readonly
     */
    readonly invokeId: InvokeId;
    /**
     * @summary `eventInvokeId`.
     * @public
     * @readonly
     */
    readonly eventInvokeId: IntUnsignedLong;
    /**
     * @summary `result`.
     * @public
     * @readonly
     */
    readonly result: FspThrowEventReturn_result;

    constructor (
        performerCredentials: Credentials,
        invokeId: InvokeId,
        eventInvokeId: IntUnsignedLong,
        result: FspThrowEventReturn_result
    ) {
        this.performerCredentials = performerCredentials;
        this.invokeId = invokeId;
        this.eventInvokeId = eventInvokeId;
        this.result = result;
    }

    /**
     * @summary Restructures an object into a FspThrowEventReturn
     * @description
     * 
     * This takes an `object` and converts it to a `FspThrowEventReturn`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspThrowEventReturn`.
     * @returns {FspThrowEventReturn}
     */
    public static _from_object (_o: { [_K in keyof (FspThrowEventReturn)]: (FspThrowEventReturn)[_K] }): FspThrowEventReturn {
        return new FspThrowEventReturn(_o.performerCredentials, _o.invokeId, _o.eventInvokeId, _o.result);
    }


}

/**
 * @summary The Leading Root Component Types of FspThrowEventReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspThrowEventReturn: $.ComponentSpec[] = [
    new $.ComponentSpec("performerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("eventInvokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("result", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of FspThrowEventReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspThrowEventReturn: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspThrowEventReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspThrowEventReturn: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspThrowEventReturn: $.ASN1Decoder<FspThrowEventReturn> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspThrowEventReturn
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspThrowEventReturn (el: _Element): FspThrowEventReturn {
    if (!_cached_decoder_for_FspThrowEventReturn) { _cached_decoder_for_FspThrowEventReturn = function (el: _Element): FspThrowEventReturn {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("FspThrowEventReturn contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "performerCredentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "eventInvokeId";
    sequence[3].name = "result";
    let performerCredentials!: Credentials;
    let invokeId!: InvokeId;
    let eventInvokeId!: IntUnsignedLong;
    let result!: FspThrowEventReturn_result;
    performerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    eventInvokeId = _decode_IntUnsignedLong(sequence[2]);
    result = _decode_FspThrowEventReturn_result(sequence[3]);
    return new FspThrowEventReturn(
        performerCredentials,
        invokeId,
        eventInvokeId,
        result,

    );
}; }
    return _cached_decoder_for_FspThrowEventReturn(el);
}

let _cached_encoder_for_FspThrowEventReturn: $.ASN1Encoder<FspThrowEventReturn> | null = null;

/**
 * @summary Encodes a(n) FspThrowEventReturn into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspThrowEventReturn, encoded as an ASN.1 Element.
 */
export
function _encode_FspThrowEventReturn (value: FspThrowEventReturn, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspThrowEventReturn) { _cached_encoder_for_FspThrowEventReturn = function (value: FspThrowEventReturn, _elGetter: $.ASN1Encoder<FspThrowEventReturn>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.performerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_IntUnsignedLong(value.eventInvokeId, $.BER),
        /* REQUIRED   */ _encode_FspThrowEventReturn_result(value.result, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspThrowEventReturn(value, elGetter);
}


/* eslint-enable */
