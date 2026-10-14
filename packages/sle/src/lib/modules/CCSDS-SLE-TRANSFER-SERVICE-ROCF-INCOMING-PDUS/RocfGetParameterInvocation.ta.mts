/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";
import { RocfParameterName, _decode_RocfParameterName, _encode_RocfParameterName } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/RocfParameterName.ta.mjs";


/**
 * @summary RocfGetParameterInvocation
 * @description
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
     * @public
     * @readonly
     */
    readonly invokerCredentials: Credentials;
    /**
     * @summary `invokeId`.
     * @public
     * @readonly
     */
    readonly invokeId: InvokeId;
    /**
     * @summary `rocfParameter`.
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
