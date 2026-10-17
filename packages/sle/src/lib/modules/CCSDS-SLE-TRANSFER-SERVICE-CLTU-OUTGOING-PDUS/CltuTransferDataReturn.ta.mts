/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";
import { CltuIdentification, _decode_CltuIdentification, _encode_CltuIdentification } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuIdentification.ta.mjs";
import { BufferSize, _decode_BufferSize, _encode_BufferSize } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/BufferSize.ta.mjs";
import { CltuTransferDataReturn_result, _decode_CltuTransferDataReturn_result, _encode_CltuTransferDataReturn_result } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-OUTGOING-PDUS/CltuTransferDataReturn-result.ta.mjs";


/**
 * @summary CltuTransferDataReturn
 * @description
 * 
 * Provider report of CLTU-TRANSFER-DATA. The provider state stays active.
 * cltu-identification in the return is the value expected on the next
 * invocation, on both success and failure. cltu-buffer-available is always
 * present. CCSDS 912.1-B-5, section 3.6.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuTransferDataReturn ::= SEQUENCE
 * {  performerCredentials          Credentials
 * ,  invokeId                      InvokeId
 * ,  cltuIdentification            CltuIdentification
 * ,  cltuBufferAvailable           BufferSize
 * ,  result                        CHOICE
 *    {  positiveResult                [0]   NULL
 *    ,  negativeResult                [1]   DiagnosticCltuTransferData
 *    }
 * }
 * ```
 * 
 * @class
 */
export
class CltuTransferDataReturn {
    /**
     * @summary `performerCredentials`.
     * @description
     *
     * Credentials that let the invoker authenticate this return when the agreed
     * authentication level requires it. Set this to unused when authentication
     * is not required. CCSDS 912.1-B-5, section 3.1.5.
     * @public
     * @readonly
     */
    readonly performerCredentials: Credentials;
    /**
     * @summary `invokeId`.
     * @description
     *
     * The invoke-ID from the invocation, returned unchanged. CCSDS 912.1-B-5,
     * sections 3.6.2.4 and 3.1.6.
     * @public
     * @readonly
     */
    readonly invokeId: InvokeId;
    /**
     * @summary `cltuIdentification`.
     * @description
     *
     * cltu-identification expected on the next CLTU-TRANSFER-DATA. After a
     * positive result this is one greater than the value in the invocation.
     * After a negative result it is the value the provider still expects: the
     * START first-cltu-identification for the first CLTU, otherwise one greater
     * than the last accepted CLTU. CCSDS 912.1-B-5, section 3.6.2.5.
     * @public
     * @readonly
     */
    readonly cltuIdentification: CltuIdentification;
    /**
     * @summary `cltuBufferAvailable`.
     * @description
     *
     * Octets still available for complete CLTUs. A small extra buffer at the
     * modulator input, used to avoid underflow, is part of production and is
     * omitted from this count. CCSDS 912.1-B-5, section 3.6.2.11.
     * @public
     * @readonly
     */
    readonly cltuBufferAvailable: BufferSize;
    /**
     * @summary `result`.
     * @description
     *
     * positiveResult accepts the CLTU into the buffer. negativeResult carries
     * DiagnosticCltuTransferData and the CLTU is discarded. CCSDS 912.1-B-5,
     * sections 3.6.2.12 and 3.6.3.
     * @public
     * @readonly
     */
    readonly result: CltuTransferDataReturn_result;

    constructor (
        performerCredentials: Credentials,
        invokeId: InvokeId,
        cltuIdentification: CltuIdentification,
        cltuBufferAvailable: BufferSize,
        result: CltuTransferDataReturn_result
    ) {
        this.performerCredentials = performerCredentials;
        this.invokeId = invokeId;
        this.cltuIdentification = cltuIdentification;
        this.cltuBufferAvailable = cltuBufferAvailable;
        this.result = result;
    }

    /**
     * @summary Restructures an object into a CltuTransferDataReturn
     * @description
     * 
     * This takes an `object` and converts it to a `CltuTransferDataReturn`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CltuTransferDataReturn`.
     * @returns {CltuTransferDataReturn}
     */
    public static _from_object (_o: { [_K in keyof (CltuTransferDataReturn)]: (CltuTransferDataReturn)[_K] }): CltuTransferDataReturn {
        return new CltuTransferDataReturn(_o.performerCredentials, _o.invokeId, _o.cltuIdentification, _o.cltuBufferAvailable, _o.result);
    }


}

/**
 * @summary The Leading Root Component Types of CltuTransferDataReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CltuTransferDataReturn: $.ComponentSpec[] = [
    new $.ComponentSpec("performerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("cltuIdentification", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("cltuBufferAvailable", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("result", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of CltuTransferDataReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CltuTransferDataReturn: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CltuTransferDataReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CltuTransferDataReturn: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CltuTransferDataReturn: $.ASN1Decoder<CltuTransferDataReturn> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuTransferDataReturn
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuTransferDataReturn (el: _Element): CltuTransferDataReturn {
    if (!_cached_decoder_for_CltuTransferDataReturn) { _cached_decoder_for_CltuTransferDataReturn = function (el: _Element): CltuTransferDataReturn {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 5) {
        throw new _ConstructionError("CltuTransferDataReturn contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "performerCredentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "cltuIdentification";
    sequence[3].name = "cltuBufferAvailable";
    sequence[4].name = "result";
    let performerCredentials!: Credentials;
    let invokeId!: InvokeId;
    let cltuIdentification!: CltuIdentification;
    let cltuBufferAvailable!: BufferSize;
    let result!: CltuTransferDataReturn_result;
    performerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    cltuIdentification = _decode_CltuIdentification(sequence[2]);
    cltuBufferAvailable = _decode_BufferSize(sequence[3]);
    result = _decode_CltuTransferDataReturn_result(sequence[4]);
    return new CltuTransferDataReturn(
        performerCredentials,
        invokeId,
        cltuIdentification,
        cltuBufferAvailable,
        result,

    );
}; }
    return _cached_decoder_for_CltuTransferDataReturn(el);
}

let _cached_encoder_for_CltuTransferDataReturn: $.ASN1Encoder<CltuTransferDataReturn> | null = null;

/**
 * @summary Encodes a(n) CltuTransferDataReturn into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuTransferDataReturn, encoded as an ASN.1 Element.
 */
export
function _encode_CltuTransferDataReturn (value: CltuTransferDataReturn, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuTransferDataReturn) { _cached_encoder_for_CltuTransferDataReturn = function (value: CltuTransferDataReturn, _elGetter: $.ASN1Encoder<CltuTransferDataReturn>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.performerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_CltuIdentification(value.cltuIdentification, $.BER),
        /* REQUIRED   */ _encode_BufferSize(value.cltuBufferAvailable, $.BER),
        /* REQUIRED   */ _encode_CltuTransferDataReturn_result(value.result, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CltuTransferDataReturn(value, elGetter);
}


/* eslint-enable */
