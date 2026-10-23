/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CallIdentity, _decode_CallIdentity, _encode_CallIdentity } from "../Call-Transfer-Operations-asn1-97/CallIdentity.ta.mjs";
import { CTSetupArg_argumentExtension, _decode_CTSetupArg_argumentExtension, _encode_CTSetupArg_argumentExtension } from "../Call-Transfer-Operations-asn1-97/CTSetupArg-argumentExtension.ta.mjs";

/**
 * @summary CTSetupArg
 * @description
 *
 * Argument of `callTransferSetup`, carried in the SETUP of the new
 * connection so the Secondary PINX can bind that connection to the
 * secondary call. ECMA-178 §6.5.2.3, §6.5.3.3; ECMA-177 §8.2.1.5.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-178/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-177/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CTSetupArg ::= SEQUENCE {
 *     callIdentity CallIdentity,
 *     argumentExtension CHOICE {
 *         single [0] IMPLICIT Extension {{CTExtSet}},
 *         multiple [1] IMPLICIT SEQUENCE OF Extension {{CTExtSet}}
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CTSetupArg {
    /**
     * @summary `callIdentity`.
     * @description
     *
     * Same value as in `callTransferInitiate`. The Secondary PINX
     * associates the new connection with the call whose SS-CT entity
     * is in CT-Await-Setup. ECMA-178 §6.5.2.3, §6.5.3.3.
     * @public
     * @readonly
     */
    readonly callIdentity: CallIdentity;
    /**
     * @summary `argumentExtension`.
     * @description
     *
     * Manufacturer-specific extension. ECMA-178 §6.3.1 defines no
     * member of `CTExtSet`.
     * @public
     * @readonly
     */
    readonly argumentExtension: OPTIONAL<CTSetupArg_argumentExtension>;

    constructor (
        callIdentity: CallIdentity,
        argumentExtension?: OPTIONAL<CTSetupArg_argumentExtension>
    ) {
        this.callIdentity = callIdentity;
        this.argumentExtension = argumentExtension;
    }

    /**
     * @summary Restructures an object into a CTSetupArg
     * @description
     * 
     * This takes an `object` and converts it to a `CTSetupArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CTSetupArg`.
     * @returns {CTSetupArg}
     */
    public static _from_object (_o: { [_K in keyof (CTSetupArg)]: (CTSetupArg)[_K] }): CTSetupArg {
        return new CTSetupArg(_o.callIdentity, _o.argumentExtension);
    }

}

/**
 * @summary The Leading Root Component Types of CTSetupArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CTSetupArg: $.ComponentSpec[] = [
    new $.ComponentSpec("callIdentity", false, $.hasTag(_TagClass.universal, 18)),
    new $.ComponentSpec("argumentExtension", true, $.or($.hasTag(_TagClass.context, 0), $.hasTag(_TagClass.context, 1)))
];

/**
 * @summary The Trailing Root Component Types of CTSetupArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CTSetupArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CTSetupArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CTSetupArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CTSetupArg: $.ASN1Decoder<CTSetupArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CTSetupArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CTSetupArg (el: _Element): CTSetupArg {
    if (!_cached_decoder_for_CTSetupArg) { _cached_decoder_for_CTSetupArg = function (el: _Element): CTSetupArg {
    let callIdentity!: CallIdentity;
    let argumentExtension: OPTIONAL<CTSetupArg_argumentExtension>;
    const callbacks: $.DecodingMap = {
        "callIdentity": (_el: _Element): void => { callIdentity = _decode_CallIdentity(_el); },
        "argumentExtension": (_el: _Element): void => { argumentExtension = _decode_CTSetupArg_argumentExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CTSetupArg,
        _extension_additions_list_spec_for_CTSetupArg,
        _root_component_type_list_2_spec_for_CTSetupArg,
        undefined,
    );
    return new CTSetupArg(
        callIdentity,
        argumentExtension
    );
}; }
    return _cached_decoder_for_CTSetupArg(el);
}

let _cached_encoder_for_CTSetupArg: $.ASN1Encoder<CTSetupArg> | null = null;

/**
 * @summary Encodes a(n) CTSetupArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CTSetupArg, encoded as an ASN.1 Element.
 */
export
function _encode_CTSetupArg (value: CTSetupArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CTSetupArg) { _cached_encoder_for_CTSetupArg = function (value: CTSetupArg, _elGetter: $.ASN1Encoder<CTSetupArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_CallIdentity(value.callIdentity, $.BER));
    if (value.argumentExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_CTSetupArg_argumentExtension(value.argumentExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CTSetupArg(value, elGetter);
}

/* eslint-enable */
