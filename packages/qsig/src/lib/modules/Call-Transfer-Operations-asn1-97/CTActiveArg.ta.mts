/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PresentedAddressScreened, _decode_PresentedAddressScreened, _encode_PresentedAddressScreened } from "../Addressing-Data-Elements-asn1-97/PresentedAddressScreened.ta.mjs";
import { PSS1InformationElement, _decode_PSS1InformationElement, _encode_PSS1InformationElement } from "../PSS1-generic-parameters-definition-asn1-97/PSS1InformationElement.ta.mjs";
import { Name, _decode_Name, _encode_Name } from "../Name-Operations-asn1-97/Name.ta.mjs";
import { CTActiveArg_argumentExtension, _decode_CTActiveArg_argumentExtension, _encode_CTActiveArg_argumentExtension } from "../Call-Transfer-Operations-asn1-97/CTActiveArg-argumentExtension.ta.mjs";

/**
 * @summary CTActiveArg
 * @description
 *
 * Argument of `callTransferActive`. Sent to the Primary PINX when User
 * C answers an alerting transfer by join. ECMA-178 §6.5.1.1;
 * ECMA-177 §7.2.1.3.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-178/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-177/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CTActiveArg ::= SEQUENCE {
 *     connectedAddress PresentedAddressScreened,
 *     basicCallInfoElements PSS1InformationElement OPTIONAL,
 *     -- ISO/IEC 11572 information element
 *     -- Progress indicator is conveyed
 *     connectedName Name OPTIONAL,
 *     argumentExtension CHOICE {
 *         single [9] IMPLICIT Extension {{CTExtSet}},
 *         multiple [10] IMPLICIT SEQUENCE OF Extension {{CTExtSet}}
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CTActiveArg {
    /**
     * @summary `connectedAddress`.
     * @description
     *
     * Address of the user who has answered. Stage 2 makes Connected
     * Number mandatory in Transfer Active (ECMA-177 §7.2.1.3).
     * ECMA-178 §6.5.1.1 does not say how this element is taken from
     * the CONNECT message. A restricted number is withheld from the
     * transferred user (ECMA-178 §6.5.5).
     * @public
     * @readonly
     */
    readonly connectedAddress: PresentedAddressScreened;
    /**
     * @summary `basicCallInfoElements`.
     * @description
     *
     * Progress indicator information elements from ECMA-143, embedded
     * as specified in ECMA-165 Annex B. May be included.
     * ECMA-178 §6.3.2.2, §6.5.1.1.
     * @public
     * @readonly
     */
    readonly basicCallInfoElements: OPTIONAL<PSS1InformationElement>;
    /**
     * @summary `connectedName`.
     * @description
     *
     * Name of the answered user. If CONNECT carried a `connectedName`
     * invoke (ECMA-164), that name may be placed here instead of
     * relaying the invoke. ECMA-178 §6.5.1.1. A restricted name is
     * withheld from the transferred user (§6.5.5).
     * @public
     * @readonly
     */
    readonly connectedName: OPTIONAL<Name>;
    /**
     * @summary `argumentExtension`.
     * @description
     *
     * Manufacturer-specific extension. ECMA-178 §6.3.1 defines no
     * member of `CTExtSet`.
     * @public
     * @readonly
     */
    readonly argumentExtension: OPTIONAL<CTActiveArg_argumentExtension>;

    constructor (
        connectedAddress: PresentedAddressScreened,
        basicCallInfoElements?: OPTIONAL<PSS1InformationElement>,
        connectedName?: OPTIONAL<Name>,
        argumentExtension?: OPTIONAL<CTActiveArg_argumentExtension>
    ) {
        this.connectedAddress = connectedAddress;
        this.basicCallInfoElements = basicCallInfoElements;
        this.connectedName = connectedName;
        this.argumentExtension = argumentExtension;
    }

    /**
     * @summary Restructures an object into a CTActiveArg
     * @description
     * 
     * This takes an `object` and converts it to a `CTActiveArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CTActiveArg`.
     * @returns {CTActiveArg}
     */
    public static _from_object (_o: { [_K in keyof (CTActiveArg)]: (CTActiveArg)[_K] }): CTActiveArg {
        return new CTActiveArg(_o.connectedAddress, _o.basicCallInfoElements, _o.connectedName, _o.argumentExtension);
    }

}

/**
 * @summary The Leading Root Component Types of CTActiveArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CTActiveArg: $.ComponentSpec[] = [
    new $.ComponentSpec("connectedAddress", false, $.hasAnyTag),
    new $.ComponentSpec("basicCallInfoElements", true, $.hasTag(_TagClass.application, 0)),
    new $.ComponentSpec("connectedName", true, $.or($.hasAnyTag, $.hasAnyTag, $.hasTag(_TagClass.context, 4))),
    new $.ComponentSpec("argumentExtension", true, $.or($.hasTag(_TagClass.context, 9), $.hasTag(_TagClass.context, 10)))
];

/**
 * @summary The Trailing Root Component Types of CTActiveArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CTActiveArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CTActiveArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CTActiveArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CTActiveArg: $.ASN1Decoder<CTActiveArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CTActiveArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CTActiveArg (el: _Element): CTActiveArg {
    if (!_cached_decoder_for_CTActiveArg) { _cached_decoder_for_CTActiveArg = function (el: _Element): CTActiveArg {
    let connectedAddress!: PresentedAddressScreened;
    let basicCallInfoElements: OPTIONAL<PSS1InformationElement>;
    let connectedName: OPTIONAL<Name>;
    let argumentExtension: OPTIONAL<CTActiveArg_argumentExtension>;
    const callbacks: $.DecodingMap = {
        "connectedAddress": (_el: _Element): void => { connectedAddress = _decode_PresentedAddressScreened(_el); },
        "basicCallInfoElements": (_el: _Element): void => { basicCallInfoElements = _decode_PSS1InformationElement(_el); },
        "connectedName": (_el: _Element): void => { connectedName = _decode_Name(_el); },
        "argumentExtension": (_el: _Element): void => { argumentExtension = _decode_CTActiveArg_argumentExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CTActiveArg,
        _extension_additions_list_spec_for_CTActiveArg,
        _root_component_type_list_2_spec_for_CTActiveArg,
        undefined,
    );
    return new CTActiveArg(
        connectedAddress,
        basicCallInfoElements,
        connectedName,
        argumentExtension
    );
}; }
    return _cached_decoder_for_CTActiveArg(el);
}

let _cached_encoder_for_CTActiveArg: $.ASN1Encoder<CTActiveArg> | null = null;

/**
 * @summary Encodes a(n) CTActiveArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CTActiveArg, encoded as an ASN.1 Element.
 */
export
function _encode_CTActiveArg (value: CTActiveArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CTActiveArg) { _cached_encoder_for_CTActiveArg = function (value: CTActiveArg, _elGetter: $.ASN1Encoder<CTActiveArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_PresentedAddressScreened(value.connectedAddress, $.BER));
    if (value.basicCallInfoElements !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.application, 0, () => _encode_PSS1InformationElement, $.BER)(value.basicCallInfoElements, $.BER));
    }
    if (value.connectedName !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_Name(value.connectedName, $.BER));
    }
    if (value.argumentExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_CTActiveArg_argumentExtension(value.argumentExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CTActiveArg(value, elGetter);
}

/* eslint-enable */
