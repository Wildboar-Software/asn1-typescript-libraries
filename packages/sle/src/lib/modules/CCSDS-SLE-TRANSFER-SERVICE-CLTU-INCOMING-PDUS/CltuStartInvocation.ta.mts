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


/**
 * @summary CltuStartInvocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuStartInvocation ::= SEQUENCE
 * {  invokerCredentials            Credentials
 * ,  invokeId                      InvokeId
 * ,  firstCltuIdentification       CltuIdentification
 * }
 * ```
 * 
 * @class
 */
export
class CltuStartInvocation {
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
     * @summary `firstCltuIdentification`.
     * @public
     * @readonly
     */
    readonly firstCltuIdentification: CltuIdentification;

    constructor (
        invokerCredentials: Credentials,
        invokeId: InvokeId,
        firstCltuIdentification: CltuIdentification
    ) {
        this.invokerCredentials = invokerCredentials;
        this.invokeId = invokeId;
        this.firstCltuIdentification = firstCltuIdentification;
    }

    /**
     * @summary Restructures an object into a CltuStartInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `CltuStartInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CltuStartInvocation`.
     * @returns {CltuStartInvocation}
     */
    public static _from_object (_o: { [_K in keyof (CltuStartInvocation)]: (CltuStartInvocation)[_K] }): CltuStartInvocation {
        return new CltuStartInvocation(_o.invokerCredentials, _o.invokeId, _o.firstCltuIdentification);
    }


}

/**
 * @summary The Leading Root Component Types of CltuStartInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CltuStartInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invokerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("firstCltuIdentification", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of CltuStartInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CltuStartInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CltuStartInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CltuStartInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CltuStartInvocation: $.ASN1Decoder<CltuStartInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuStartInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuStartInvocation (el: _Element): CltuStartInvocation {
    if (!_cached_decoder_for_CltuStartInvocation) { _cached_decoder_for_CltuStartInvocation = function (el: _Element): CltuStartInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("CltuStartInvocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokerCredentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "firstCltuIdentification";
    let invokerCredentials!: Credentials;
    let invokeId!: InvokeId;
    let firstCltuIdentification!: CltuIdentification;
    invokerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    firstCltuIdentification = _decode_CltuIdentification(sequence[2]);
    return new CltuStartInvocation(
        invokerCredentials,
        invokeId,
        firstCltuIdentification,

    );
}; }
    return _cached_decoder_for_CltuStartInvocation(el);
}

let _cached_encoder_for_CltuStartInvocation: $.ASN1Encoder<CltuStartInvocation> | null = null;

/**
 * @summary Encodes a(n) CltuStartInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuStartInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_CltuStartInvocation (value: CltuStartInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuStartInvocation) { _cached_encoder_for_CltuStartInvocation = function (value: CltuStartInvocation, _elGetter: $.ASN1Encoder<CltuStartInvocation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.invokerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_CltuIdentification(value.firstCltuIdentification, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CltuStartInvocation(value, elGetter);
}


/* eslint-enable */
