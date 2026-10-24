/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";
import { SleAcknowledgement_result, _decode_SleAcknowledgement_result, _encode_SleAcknowledgement_result } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-PDUS/SleAcknowledgement-result.ta.mjs";


/**
 * @summary SleAcknowledgement
 * @description
 * 
 * Confirmed-operation return whose negative alternative carries the common
 * diagnostics. Annex A2.7 maps this PDU to the RAF-STOP return. A positive STOP
 * result means frame delivery has ceased and the provider moves to state 2
 * (ready). A negative result leaves delivery running and the provider state
 * unchanged.
 * 
 * CCSDS 911.1-B-5, sections 3.5.2, 3.5.3, and annex A2.7.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SleAcknowledgement ::= SEQUENCE
 * { credentials               Credentials
 * , invokeId                 InvokeId
 * , result                   CHOICE
 *    { positiveResult     [0]    NULL
 *    , negativeResult     [1]    Diagnostics
 *    }
 * }
 * ```
 * 
 * @class
 */
export
class SleAcknowledgement {
    /**
     * @summary `credentials`.
     * @description
     * 
     * Performer credentials with which the invoker authenticates this return.
     * For RAF-STOP, section 3.5.2.3 names the parameter performer-credentials.
     * When the return is unauthenticated, the value should be `unused`.
     *
     * CCSDS 911.1-B-5, sections 3.5.2.3 and 3.1.5.6.
     * @public
     * @readonly
     */
    readonly credentials: Credentials;
    /**
     * @summary `invokeId`.
     * @description
     * 
     * The invoke ID of the invocation, returned unchanged.
     *
     * CCSDS 911.1-B-5, sections 3.5.2.4 and 3.1.6.
     * @public
     * @readonly
     */
    readonly invokeId: InvokeId;
    /**
     * @summary `result`.
     * @description
     * 
     * `positiveResult` reports that the operation was performed. For RAF-STOP
     * that means frame delivery has ceased. `negativeResult` carries
     * `duplicateInvokeId` or `otherReason`, and RAF-STOP delivery continues.
     *
     * CCSDS 911.1-B-5, sections 3.5.2.5 and 3.5.2.6.
     * @public
     * @readonly
     */
    readonly result: SleAcknowledgement_result;

    constructor (
        credentials: Credentials,
        invokeId: InvokeId,
        result: SleAcknowledgement_result
    ) {
        this.credentials = credentials;
        this.invokeId = invokeId;
        this.result = result;
    }

    /**
     * @summary Restructures an object into a SleAcknowledgement
     * @description
     * 
     * This takes an `object` and converts it to a `SleAcknowledgement`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SleAcknowledgement`.
     * @returns {SleAcknowledgement}
     */
    public static _from_object (_o: { [_K in keyof (SleAcknowledgement)]: (SleAcknowledgement)[_K] }): SleAcknowledgement {
        return new SleAcknowledgement(_o.credentials, _o.invokeId, _o.result);
    }


}

/**
 * @summary The Leading Root Component Types of SleAcknowledgement
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SleAcknowledgement: $.ComponentSpec[] = [
    new $.ComponentSpec("credentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("result", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of SleAcknowledgement
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SleAcknowledgement: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SleAcknowledgement
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SleAcknowledgement: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SleAcknowledgement: $.ASN1Decoder<SleAcknowledgement> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SleAcknowledgement
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SleAcknowledgement (el: _Element): SleAcknowledgement {
    if (!_cached_decoder_for_SleAcknowledgement) { _cached_decoder_for_SleAcknowledgement = function (el: _Element): SleAcknowledgement {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("SleAcknowledgement contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "credentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "result";
    let credentials!: Credentials;
    let invokeId!: InvokeId;
    let result!: SleAcknowledgement_result;
    credentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    result = _decode_SleAcknowledgement_result(sequence[2]);
    return new SleAcknowledgement(
        credentials,
        invokeId,
        result,

    );
}; }
    return _cached_decoder_for_SleAcknowledgement(el);
}

let _cached_encoder_for_SleAcknowledgement: $.ASN1Encoder<SleAcknowledgement> | null = null;

/**
 * @summary Encodes a(n) SleAcknowledgement into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SleAcknowledgement, encoded as an ASN.1 Element.
 */
export
function _encode_SleAcknowledgement (value: SleAcknowledgement, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SleAcknowledgement) { _cached_encoder_for_SleAcknowledgement = function (value: SleAcknowledgement, _elGetter: $.ASN1Encoder<SleAcknowledgement>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.credentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_SleAcknowledgement_result(value.result, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_SleAcknowledgement(value, elGetter);
}


/* eslint-enable */
