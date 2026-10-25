/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { type InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";
import { type RafParameterName, _decode_RafParameterName, _encode_RafParameterName } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/RafParameterName.ta.mjs";


/**
 * @summary RafGetParameterInvocation
 * @description
 * 
 * User invocation of RAF-GET-PARAMETER. Valid in state 2 (ready) and state 3
 * (active). On success the return carries the current value of the named
 * parameter. The provider state stays unchanged.
 * 
 * CCSDS 911.1-B-5, sections 3.10 and 3.10.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RafGetParameterInvocation ::= SEQUENCE
 * {   invokerCredentials                Credentials
 * ,   invokeId                          InvokeId
 * ,   rafParameter                      RafParameterName
 * }
 * ```
 * 
 * @class
 */
export
class RafGetParameterInvocation {
    /**
     * @summary `invokerCredentials`.
     * @description
     * Information with which the provider authenticates this invocation. When
     * the agreed level is `all`, every RAF invocation and return except
     * RAF-PEER-ABORT is authenticated; `bind` authenticates only RAF-BIND;
     * `none` leaves every invocation and return unauthenticated. When
     * this invocation is unauthenticated, the value should be `unused`.
     * CCSDS 911.1-B-5, sections
     * 3.10.2.2 and 3.1.5.
     * @public
     * @readonly
     */
    readonly invokerCredentials: Credentials;
    /**
     * @summary `invokeId`.
     * @description
     * Invoker-chosen integer, returned unchanged, that pairs this return with
     * its invocation. A value that still has an outstanding return in the same
     * service instance is rejected with diagnostic `duplicate Invoke-ID`. CCSDS
     * 911.1-B-5, sections 3.10.2.4 and 3.1.6.
     * @public
     * @readonly
     */
    readonly invokeId: InvokeId;
    /**
     * @summary `rafParameter`.
     * @description
     * Which RAF parameter to return. The permitted names are the
     * `RafParameterName` subset in table 3-11. A name the provider does not
     * recognize yields diagnostic `unknownParameter`. On a negative result the
     * name is omitted from the return.
     * 
     * CCSDS 911.1-B-5, sections 3.10.2.5 and 3.10.2.8.
     * @public
     * @readonly
     */
    readonly rafParameter: RafParameterName;

    constructor (
        invokerCredentials: Credentials,
        invokeId: InvokeId,
        rafParameter: RafParameterName
    ) {
        this.invokerCredentials = invokerCredentials;
        this.invokeId = invokeId;
        this.rafParameter = rafParameter;
    }

    /**
     * @summary Restructures an object into a RafGetParameterInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `RafGetParameterInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RafGetParameterInvocation`.
     * @returns {RafGetParameterInvocation}
     */
    public static _from_object (_o: { [_K in keyof (RafGetParameterInvocation)]: (RafGetParameterInvocation)[_K] }): RafGetParameterInvocation {
        return new RafGetParameterInvocation(_o.invokerCredentials, _o.invokeId, _o.rafParameter);
    }


}

/**
 * @summary The Leading Root Component Types of RafGetParameterInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RafGetParameterInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invokerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("rafParameter", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of RafGetParameterInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RafGetParameterInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RafGetParameterInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RafGetParameterInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RafGetParameterInvocation: $.ASN1Decoder<RafGetParameterInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RafGetParameterInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RafGetParameterInvocation (el: _Element): RafGetParameterInvocation {
    if (!_cached_decoder_for_RafGetParameterInvocation) { _cached_decoder_for_RafGetParameterInvocation = function (el: _Element): RafGetParameterInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("RafGetParameterInvocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokerCredentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "rafParameter";
    let invokerCredentials!: Credentials;
    let invokeId!: InvokeId;
    let rafParameter!: RafParameterName;
    invokerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    rafParameter = _decode_RafParameterName(sequence[2]);
    return new RafGetParameterInvocation(
        invokerCredentials,
        invokeId,
        rafParameter,

    );
}; }
    return _cached_decoder_for_RafGetParameterInvocation(el);
}

let _cached_encoder_for_RafGetParameterInvocation: $.ASN1Encoder<RafGetParameterInvocation> | null = null;

/**
 * @summary Encodes a(n) RafGetParameterInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RafGetParameterInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_RafGetParameterInvocation (value: RafGetParameterInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RafGetParameterInvocation) { _cached_encoder_for_RafGetParameterInvocation = function (value: RafGetParameterInvocation, _elGetter: $.ASN1Encoder<RafGetParameterInvocation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.invokerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_RafParameterName(value.rafParameter, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RafGetParameterInvocation(value, elGetter);
}


/* eslint-enable */
