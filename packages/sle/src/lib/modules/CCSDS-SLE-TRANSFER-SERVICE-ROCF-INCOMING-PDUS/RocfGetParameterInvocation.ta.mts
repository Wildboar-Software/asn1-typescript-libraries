/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { type InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";
import { type RocfParameterName, _decode_RocfParameterName, _encode_RocfParameterName } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/RocfParameterName.ta.mjs";


/**
 * @summary RocfGetParameterInvocation
 * @description
 * 
 * The user invokes ROCF-GET-PARAMETER, in state 2 (ready) or state 3 (active),
 * to read one parameter from table 3-11. The operation is confirmed and
 * non-blocking. A positive return carries the current value. A negative return
 * carries a diagnostic and omits the value. The provider state stays
 * unchanged.
 *
 * CCSDS 911.5-B-4, section 3.10.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RocfGetParameterInvocation ::= SEQUENCE
 * {  invokerCredentials            Credentials
 * ,  invokeId                      InvokeId
 * ,  rocfParameter                 RocfParameterName
 * }
 * ```
 * 
 * @class
 */
export
class RocfGetParameterInvocation {
    /**
     * @summary `invokerCredentials`.
     * @description
     * 
     * Credentials the provider uses to authenticate this invocation. When the
     * agreed authentication level does not cover the invocation, the value is
     * unused. The octet layout is the bilaterally agreed algorithm, which this
     * specification leaves unspecified. CCSDS 911.5-B-4, sections 3.1.5 and
     * 3.10.2.2.
     * @public
     * @readonly
     */
    readonly invokerCredentials: Credentials;
    /**
     * @summary `invokeId`.
     * @description
     * 
     * Integer chosen by the invoker. The performer returns it unchanged so the
     * return can be matched to this invocation. A value that duplicates an
     * invoke-ID still awaiting confirmation in this service instance is
     * rejected. CCSDS 911.5-B-4, sections 3.1.6 and 3.10.2.4.
     * @public
     * @readonly
     */
    readonly invokeId: InvokeId;
    /**
     * @summary `rocfParameter`.
     * @description
     * 
     * The table 3-11 parameter to return. A name the provider does not
     * recognize as an ROCF parameter produces the unknownParameter diagnostic.
     *
     * CCSDS 911.5-B-4, sections 3.10.2.5 and 3.10.2.8.
     * @public
     * @readonly
     */
    readonly rocfParameter: RocfParameterName;

    constructor (
        invokerCredentials: Credentials,
        invokeId: InvokeId,
        rocfParameter: RocfParameterName
    ) {
        this.invokerCredentials = invokerCredentials;
        this.invokeId = invokeId;
        this.rocfParameter = rocfParameter;
    }

    /**
     * @summary Restructures an object into a RocfGetParameterInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `RocfGetParameterInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RocfGetParameterInvocation`.
     * @returns {RocfGetParameterInvocation}
     */
    public static _from_object (_o: { [_K in keyof (RocfGetParameterInvocation)]: (RocfGetParameterInvocation)[_K] }): RocfGetParameterInvocation {
        return new RocfGetParameterInvocation(_o.invokerCredentials, _o.invokeId, _o.rocfParameter);
    }


}

/**
 * @summary The Leading Root Component Types of RocfGetParameterInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RocfGetParameterInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invokerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("rocfParameter", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of RocfGetParameterInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RocfGetParameterInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RocfGetParameterInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RocfGetParameterInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RocfGetParameterInvocation: $.ASN1Decoder<RocfGetParameterInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RocfGetParameterInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RocfGetParameterInvocation (el: _Element): RocfGetParameterInvocation {
    if (!_cached_decoder_for_RocfGetParameterInvocation) { _cached_decoder_for_RocfGetParameterInvocation = function (el: _Element): RocfGetParameterInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("RocfGetParameterInvocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokerCredentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "rocfParameter";
    let invokerCredentials!: Credentials;
    let invokeId!: InvokeId;
    let rocfParameter!: RocfParameterName;
    invokerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    rocfParameter = _decode_RocfParameterName(sequence[2]);
    return new RocfGetParameterInvocation(
        invokerCredentials,
        invokeId,
        rocfParameter,

    );
}; }
    return _cached_decoder_for_RocfGetParameterInvocation(el);
}

let _cached_encoder_for_RocfGetParameterInvocation: $.ASN1Encoder<RocfGetParameterInvocation> | null = null;

/**
 * @summary Encodes a(n) RocfGetParameterInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RocfGetParameterInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_RocfGetParameterInvocation (value: RocfGetParameterInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RocfGetParameterInvocation) { _cached_encoder_for_RocfGetParameterInvocation = function (value: RocfGetParameterInvocation, _elGetter: $.ASN1Encoder<RocfGetParameterInvocation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.invokerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_RocfParameterName(value.rocfParameter, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RocfGetParameterInvocation(value, elGetter);
}


/* eslint-enable */
