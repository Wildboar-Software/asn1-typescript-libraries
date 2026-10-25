/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { type UnbindReason, _decode_UnbindReason, _encode_UnbindReason } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/UnbindReason.ta.mjs";


/**
 * @summary SleUnbindInvocation
 * @description
 * 
 * Invocation of UNBIND. Releases an association established by BIND. Valid only
 * in state 2 (ready), and only the BIND initiator may invoke it. Until the
 * return arrives, the initiator invokes no further operations, performs no
 * further operations the responder has invoked, and returns no further
 * reports. If the return does not arrive, the initiator should PEER-ABORT.
 * 
 * CCSDS 911.1-B-5, sections 3.3.1 and A2.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SleUnbindInvocation ::= SEQUENCE
 * { invokerCredentials       Credentials
 * , unbindReason             UnbindReason
 * }
 * ```
 * 
 * @class
 */
export
class SleUnbindInvocation {
    /**
     * @summary `invokerCredentials`.
     * @description
     * 
     * Information with which the performer authenticates this invocation. When
     * the agreed level is `all`, UNBIND is authenticated; an invocation that
     * then fails the check is ignored. When the level is `bind` or `none`, the
     * value should be `unused`.
     *
     * CCSDS 911.1-B-5, sections 3.3.2.2, 3.1.5, and 3.3.2.5.
     * @public
     * @readonly
     */
    readonly invokerCredentials: Credentials;
    /**
     * @summary `unbindReason`.
     * @description
     * 
     * Why the association is being released. The meaning depends on whether the
     * user or the provider invoked UNBIND.
     *
     * CCSDS 911.1-B-5, section 3.3.2.4.
     * @public
     * @readonly
     */
    readonly unbindReason: UnbindReason;

    constructor (
        invokerCredentials: Credentials,
        unbindReason: UnbindReason
    ) {
        this.invokerCredentials = invokerCredentials;
        this.unbindReason = unbindReason;
    }

    /**
     * @summary Restructures an object into a SleUnbindInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `SleUnbindInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SleUnbindInvocation`.
     * @returns {SleUnbindInvocation}
     */
    public static _from_object (_o: { [_K in keyof (SleUnbindInvocation)]: (SleUnbindInvocation)[_K] }): SleUnbindInvocation {
        return new SleUnbindInvocation(_o.invokerCredentials, _o.unbindReason);
    }


}

/**
 * @summary The Leading Root Component Types of SleUnbindInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SleUnbindInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invokerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("unbindReason", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of SleUnbindInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SleUnbindInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SleUnbindInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SleUnbindInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SleUnbindInvocation: $.ASN1Decoder<SleUnbindInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SleUnbindInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SleUnbindInvocation (el: _Element): SleUnbindInvocation {
    if (!_cached_decoder_for_SleUnbindInvocation) { _cached_decoder_for_SleUnbindInvocation = function (el: _Element): SleUnbindInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("SleUnbindInvocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokerCredentials";
    sequence[1].name = "unbindReason";
    let invokerCredentials!: Credentials;
    let unbindReason!: UnbindReason;
    invokerCredentials = _decode_Credentials(sequence[0]);
    unbindReason = _decode_UnbindReason(sequence[1]);
    return new SleUnbindInvocation(
        invokerCredentials,
        unbindReason,

    );
}; }
    return _cached_decoder_for_SleUnbindInvocation(el);
}

let _cached_encoder_for_SleUnbindInvocation: $.ASN1Encoder<SleUnbindInvocation> | null = null;

/**
 * @summary Encodes a(n) SleUnbindInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SleUnbindInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_SleUnbindInvocation (value: SleUnbindInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SleUnbindInvocation) { _cached_encoder_for_SleUnbindInvocation = function (value: SleUnbindInvocation, _elGetter: $.ASN1Encoder<SleUnbindInvocation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.invokerCredentials, $.BER),
        /* REQUIRED   */ _encode_UnbindReason(value.unbindReason, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_SleUnbindInvocation(value, elGetter);
}


/* eslint-enable */
