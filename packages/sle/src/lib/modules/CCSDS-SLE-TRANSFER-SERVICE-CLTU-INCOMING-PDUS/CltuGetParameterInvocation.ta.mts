/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";
import { CltuParameterName, _decode_CltuParameterName, _encode_CltuParameterName } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuParameterName.ta.mjs";


/**
 * @summary CltuGetParameterInvocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuGetParameterInvocation ::= SEQUENCE
 * {  invokerCredentials            Credentials
 * ,  invokeId                      InvokeId
 * ,  cltuParameter                 CltuParameterName
 * }
 * ```
 * 
 * @class
 */
export
class CltuGetParameterInvocation {
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
     * @summary `cltuParameter`.
     * @public
     * @readonly
     */
    readonly cltuParameter: CltuParameterName;

    constructor (
        invokerCredentials: Credentials,
        invokeId: InvokeId,
        cltuParameter: CltuParameterName
    ) {
        this.invokerCredentials = invokerCredentials;
        this.invokeId = invokeId;
        this.cltuParameter = cltuParameter;
    }

    /**
     * @summary Restructures an object into a CltuGetParameterInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `CltuGetParameterInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CltuGetParameterInvocation`.
     * @returns {CltuGetParameterInvocation}
     */
    public static _from_object (_o: { [_K in keyof (CltuGetParameterInvocation)]: (CltuGetParameterInvocation)[_K] }): CltuGetParameterInvocation {
        return new CltuGetParameterInvocation(_o.invokerCredentials, _o.invokeId, _o.cltuParameter);
    }


}

/**
 * @summary The Leading Root Component Types of CltuGetParameterInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CltuGetParameterInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invokerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("cltuParameter", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of CltuGetParameterInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CltuGetParameterInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CltuGetParameterInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CltuGetParameterInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CltuGetParameterInvocation: $.ASN1Decoder<CltuGetParameterInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuGetParameterInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuGetParameterInvocation (el: _Element): CltuGetParameterInvocation {
    if (!_cached_decoder_for_CltuGetParameterInvocation) { _cached_decoder_for_CltuGetParameterInvocation = function (el: _Element): CltuGetParameterInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("CltuGetParameterInvocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokerCredentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "cltuParameter";
    let invokerCredentials!: Credentials;
    let invokeId!: InvokeId;
    let cltuParameter!: CltuParameterName;
    invokerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    cltuParameter = _decode_CltuParameterName(sequence[2]);
    return new CltuGetParameterInvocation(
        invokerCredentials,
        invokeId,
        cltuParameter,

    );
}; }
    return _cached_decoder_for_CltuGetParameterInvocation(el);
}

let _cached_encoder_for_CltuGetParameterInvocation: $.ASN1Encoder<CltuGetParameterInvocation> | null = null;

/**
 * @summary Encodes a(n) CltuGetParameterInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuGetParameterInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_CltuGetParameterInvocation (value: CltuGetParameterInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuGetParameterInvocation) { _cached_encoder_for_CltuGetParameterInvocation = function (value: CltuGetParameterInvocation, elGetter: $.ASN1Encoder<CltuGetParameterInvocation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.invokerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_CltuParameterName(value.cltuParameter, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CltuGetParameterInvocation(value, elGetter);
}


/* eslint-enable */
