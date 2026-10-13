/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";
import { RafStartReturn_result, _decode_RafStartReturn_result, _encode_RafStartReturn_result } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-OUTGOING-PDUS/RafStartReturn-result.ta.mjs";


/**
 * @summary RafStartReturn
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RafStartReturn ::= SEQUENCE
 * {   performerCredentials               Credentials
 * ,   invokeId                           InvokeId
 * ,   result                             CHOICE
 *     {   positiveResult                     [0] NULL
 *     ,   negativeResult                     [1] DiagnosticRafStart
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class RafStartReturn {
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
     * @summary `result`.
     * @public
     * @readonly
     */
    readonly result: RafStartReturn_result;

    constructor (
        performerCredentials: Credentials,
        invokeId: InvokeId,
        result: RafStartReturn_result
    ) {
        this.performerCredentials = performerCredentials;
        this.invokeId = invokeId;
        this.result = result;
    }

    /**
     * @summary Restructures an object into a RafStartReturn
     * @description
     * 
     * This takes an `object` and converts it to a `RafStartReturn`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RafStartReturn`.
     * @returns {RafStartReturn}
     */
    public static _from_object (_o: { [_K in keyof (RafStartReturn)]: (RafStartReturn)[_K] }): RafStartReturn {
        return new RafStartReturn(_o.performerCredentials, _o.invokeId, _o.result);
    }


}

/**
 * @summary The Leading Root Component Types of RafStartReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RafStartReturn: $.ComponentSpec[] = [
    new $.ComponentSpec("performerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("result", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of RafStartReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RafStartReturn: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RafStartReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RafStartReturn: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RafStartReturn: $.ASN1Decoder<RafStartReturn> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RafStartReturn
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RafStartReturn (el: _Element): RafStartReturn {
    if (!_cached_decoder_for_RafStartReturn) { _cached_decoder_for_RafStartReturn = function (el: _Element): RafStartReturn {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("RafStartReturn contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "performerCredentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "result";
    let performerCredentials!: Credentials;
    let invokeId!: InvokeId;
    let result!: RafStartReturn_result;
    performerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    result = _decode_RafStartReturn_result(sequence[2]);
    return new RafStartReturn(
        performerCredentials,
        invokeId,
        result,

    );
}; }
    return _cached_decoder_for_RafStartReturn(el);
}

let _cached_encoder_for_RafStartReturn: $.ASN1Encoder<RafStartReturn> | null = null;

/**
 * @summary Encodes a(n) RafStartReturn into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RafStartReturn, encoded as an ASN.1 Element.
 */
export
function _encode_RafStartReturn (value: RafStartReturn, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RafStartReturn) { _cached_encoder_for_RafStartReturn = function (value: RafStartReturn, _elGetter: $.ASN1Encoder<RafStartReturn>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.performerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_RafStartReturn_result(value.result, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RafStartReturn(value, elGetter);
}


/* eslint-enable */
