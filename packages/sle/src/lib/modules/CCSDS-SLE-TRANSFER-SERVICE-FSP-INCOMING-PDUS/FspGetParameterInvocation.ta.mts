/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";
import { FspParameterName, _decode_FspParameterName, _encode_FspParameterName } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspParameterName.ta.mjs";


/**
 * @summary FspGetParameterInvocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameterInvocation ::= SEQUENCE
 * {  invokerCredentials         Credentials
 * ,  invokeId                   InvokeId
 * ,  fspParameterName           FspParameterName
 * }
 * ```
 * 
 * @class
 */
export
class FspGetParameterInvocation {
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
     * @summary `fspParameterName`.
     * @public
     * @readonly
     */
    readonly fspParameterName: FspParameterName;

    constructor (
        invokerCredentials: Credentials,
        invokeId: InvokeId,
        fspParameterName: FspParameterName
    ) {
        this.invokerCredentials = invokerCredentials;
        this.invokeId = invokeId;
        this.fspParameterName = fspParameterName;
    }

    /**
     * @summary Restructures an object into a FspGetParameterInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `FspGetParameterInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspGetParameterInvocation`.
     * @returns {FspGetParameterInvocation}
     */
    public static _from_object (_o: { [_K in keyof (FspGetParameterInvocation)]: (FspGetParameterInvocation)[_K] }): FspGetParameterInvocation {
        return new FspGetParameterInvocation(_o.invokerCredentials, _o.invokeId, _o.fspParameterName);
    }


}

/**
 * @summary The Leading Root Component Types of FspGetParameterInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspGetParameterInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invokerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("fspParameterName", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of FspGetParameterInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspGetParameterInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspGetParameterInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspGetParameterInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspGetParameterInvocation: $.ASN1Decoder<FspGetParameterInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameterInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameterInvocation (el: _Element): FspGetParameterInvocation {
    if (!_cached_decoder_for_FspGetParameterInvocation) { _cached_decoder_for_FspGetParameterInvocation = function (el: _Element): FspGetParameterInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("FspGetParameterInvocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokerCredentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "fspParameterName";
    let invokerCredentials!: Credentials;
    let invokeId!: InvokeId;
    let fspParameterName!: FspParameterName;
    invokerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    fspParameterName = _decode_FspParameterName(sequence[2]);
    return new FspGetParameterInvocation(
        invokerCredentials,
        invokeId,
        fspParameterName,

    );
}; }
    return _cached_decoder_for_FspGetParameterInvocation(el);
}

let _cached_encoder_for_FspGetParameterInvocation: $.ASN1Encoder<FspGetParameterInvocation> | null = null;

/**
 * @summary Encodes a(n) FspGetParameterInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameterInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameterInvocation (value: FspGetParameterInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameterInvocation) { _cached_encoder_for_FspGetParameterInvocation = function (value: FspGetParameterInvocation, _elGetter: $.ASN1Encoder<FspGetParameterInvocation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.invokerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_FspParameterName(value.fspParameterName, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspGetParameterInvocation(value, elGetter);
}


/* eslint-enable */
