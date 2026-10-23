/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CallIdentity, _decode_CallIdentity, _encode_CallIdentity } from "../Call-Transfer-Operations-asn1-97/CallIdentity.ta.mjs";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { CTInitiateArg_argumentExtension, _decode_CTInitiateArg_argumentExtension, _encode_CTInitiateArg_argumentExtension } from "../Call-Transfer-Operations-asn1-97/CTInitiateArg-argumentExtension.ta.mjs";

/**
 * @summary CTInitiateArg
 * @description
 *
 * Argument of `callTransferInitiate`. The Transferring PINX copies
 * `callIdentity` and `rerouteingNumber` from the
 * `callTransferIdentify` result. ECMA-178 §6.5.1.3;
 * ECMA-177 §8.2.1.4.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-178/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-177/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CTInitiateArg ::= SEQUENCE {
 *     callIdentity CallIdentity,
 *     rerouteingNumber PartyNumber,
 *     argumentExtension CHOICE {
 *         single [6] IMPLICIT Extension {{CTExtSet}},
 *         multiple [7] IMPLICIT SEQUENCE OF Extension {{CTExtSet}}
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CTInitiateArg {
    /**
     * @summary `callIdentity`.
     * @description
     *
     * Call identity from the `callTransferIdentify` result, relayed
     * unchanged. The Primary PINX copies it into `callTransferSetup`.
     * ECMA-178 §6.5.1.3, §6.5.2.3.
     * @public
     * @readonly
     */
    readonly callIdentity: CallIdentity;
    /**
     * @summary `rerouteingNumber`.
     * @description
     *
     * Number from the `callTransferIdentify` result, relayed unchanged.
     * The Primary PINX uses it as Called party number of the new SETUP
     * and to select the outgoing route. ECMA-178 §6.5.1.3, §6.5.2.3.
     * @public
     * @readonly
     */
    readonly rerouteingNumber: PartyNumber;
    /**
     * @summary `argumentExtension`.
     * @description
     *
     * Manufacturer-specific extension. ECMA-178 §6.3.1 defines no
     * member of `CTExtSet`.
     * @public
     * @readonly
     */
    readonly argumentExtension: OPTIONAL<CTInitiateArg_argumentExtension>;

    constructor (
        callIdentity: CallIdentity,
        rerouteingNumber: PartyNumber,
        argumentExtension: OPTIONAL<CTInitiateArg_argumentExtension>
    ) {
        this.callIdentity = callIdentity;
        this.rerouteingNumber = rerouteingNumber;
        this.argumentExtension = argumentExtension;
    }

    /**
     * @summary Restructures an object into a CTInitiateArg
     * @description
     * 
     * This takes an `object` and converts it to a `CTInitiateArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CTInitiateArg`.
     * @returns {CTInitiateArg}
     */
    public static _from_object (_o: { [_K in keyof (CTInitiateArg)]: (CTInitiateArg)[_K] }): CTInitiateArg {
        return new CTInitiateArg(_o.callIdentity, _o.rerouteingNumber, _o.argumentExtension);
    }

}

/**
 * @summary The Leading Root Component Types of CTInitiateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CTInitiateArg: $.ComponentSpec[] = [
    new $.ComponentSpec("callIdentity", false, $.hasTag(_TagClass.universal, 18)),
    new $.ComponentSpec("rerouteingNumber", false, $.hasAnyTag),
    new $.ComponentSpec("argumentExtension", true, $.or($.hasTag(_TagClass.context, 6), $.hasTag(_TagClass.context, 7)))
];

/**
 * @summary The Trailing Root Component Types of CTInitiateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CTInitiateArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CTInitiateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CTInitiateArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CTInitiateArg: $.ASN1Decoder<CTInitiateArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CTInitiateArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CTInitiateArg (el: _Element): CTInitiateArg {
    if (!_cached_decoder_for_CTInitiateArg) { _cached_decoder_for_CTInitiateArg = function (el: _Element): CTInitiateArg {
    let callIdentity!: CallIdentity;
    let rerouteingNumber!: PartyNumber;
    let argumentExtension: OPTIONAL<CTInitiateArg_argumentExtension>;
    const callbacks: $.DecodingMap = {
        "callIdentity": (_el: _Element): void => { callIdentity = _decode_CallIdentity(_el); },
        "rerouteingNumber": (_el: _Element): void => { rerouteingNumber = _decode_PartyNumber(_el); },
        "argumentExtension": (_el: _Element): void => { argumentExtension = _decode_CTInitiateArg_argumentExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CTInitiateArg,
        _extension_additions_list_spec_for_CTInitiateArg,
        _root_component_type_list_2_spec_for_CTInitiateArg,
        undefined,
    );
    return new CTInitiateArg(
        callIdentity,
        rerouteingNumber,
        argumentExtension
    );
}; }
    return _cached_decoder_for_CTInitiateArg(el);
}

let _cached_encoder_for_CTInitiateArg: $.ASN1Encoder<CTInitiateArg> | null = null;

/**
 * @summary Encodes a(n) CTInitiateArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CTInitiateArg, encoded as an ASN.1 Element.
 */
export
function _encode_CTInitiateArg (value: CTInitiateArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CTInitiateArg) { _cached_encoder_for_CTInitiateArg = function (value: CTInitiateArg, _elGetter: $.ASN1Encoder<CTInitiateArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_CallIdentity(value.callIdentity, $.BER));
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.rerouteingNumber, $.BER));
    if (value.argumentExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_CTInitiateArg_argumentExtension(value.argumentExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CTInitiateArg(value, elGetter);
}

/* eslint-enable */
