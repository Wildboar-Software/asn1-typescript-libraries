/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PresentedNumberScreened, _decode_PresentedNumberScreened, _encode_PresentedNumberScreened } from "../Addressing-Data-Elements-asn1-97/PresentedNumberScreened.ta.mjs";
import { Name, _decode_Name, _encode_Name } from "../Name-Operations-asn1-97/Name.ta.mjs";
import { PSS1InformationElement, _decode_PSS1InformationElement, _encode_PSS1InformationElement } from "../PSS1-generic-parameters-definition-asn1-97/PSS1InformationElement.ta.mjs";
import { CTUpdateArg_argumentExtension, _decode_CTUpdateArg_argumentExtension, _encode_CTUpdateArg_argumentExtension } from "../Call-Transfer-Operations-asn1-97/CTUpdateArg-argumentExtension.ta.mjs";

/**
 * @summary CTUpdateArg
 * @description
 *
 * Argument of `callTransferUpdate`. Details of the user at the sending
 * PINX, for presentation at the other end. Later information replaces
 * what arrived in `callTransferComplete`. ECMA-178 §6.5.5;
 * ECMA-177 §7.2.1.6.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-178/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-177/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CTUpdateArg ::= SEQUENCE {
 *     redirectionNumber PresentedNumberScreened,
 *     redirectionName Name OPTIONAL,
 *     basicCallInfoElements PSS1InformationElement OPTIONAL,
 *     -- ISO/IEC 11572 information element
 *     -- Progress indicator is conveyed
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
class CTUpdateArg {
    /**
     * @summary `redirectionNumber`.
     * @description
     *
     * Number of the user at the sending PINX: User B from the Primary
     * PINX, User C from the Secondary PINX. A restricted number is
     * withheld from the local user. ECMA-178 §6.5.2.1, §6.5.3.1,
     * §6.5.5.
     * @public
     * @readonly
     */
    readonly redirectionNumber: PresentedNumberScreened;
    /**
     * @summary `redirectionName`.
     * @description
     *
     * Name of the user at the sending PINX. A restricted name is
     * withheld from the local user. ECMA-178 §6.5.2.1, §6.5.3.1,
     * §6.5.5.
     * @public
     * @readonly
     */
    readonly redirectionName: OPTIONAL<Name>;
    /**
     * @summary `basicCallInfoElements`.
     * @description
     *
     * Progress indicator information elements relating to the user at
     * the sending PINX, coded as in ECMA-143. ECMA-178 §6.3.2.2,
     * §6.5.2.1, §6.5.3.1.
     * @public
     * @readonly
     */
    readonly basicCallInfoElements: OPTIONAL<PSS1InformationElement>;
    /**
     * @summary `argumentExtension`.
     * @description
     *
     * Manufacturer-specific extension. ECMA-178 §6.3.1 defines no
     * member of `CTExtSet`.
     * @public
     * @readonly
     */
    readonly argumentExtension: OPTIONAL<CTUpdateArg_argumentExtension>;

    constructor (
        redirectionNumber: PresentedNumberScreened,
        redirectionName?: OPTIONAL<Name>,
        basicCallInfoElements?: OPTIONAL<PSS1InformationElement>,
        argumentExtension?: OPTIONAL<CTUpdateArg_argumentExtension>
    ) {
        this.redirectionNumber = redirectionNumber;
        this.redirectionName = redirectionName;
        this.basicCallInfoElements = basicCallInfoElements;
        this.argumentExtension = argumentExtension;
    }

    /**
     * @summary Restructures an object into a CTUpdateArg
     * @description
     * 
     * This takes an `object` and converts it to a `CTUpdateArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CTUpdateArg`.
     * @returns {CTUpdateArg}
     */
    public static _from_object (_o: { [_K in keyof (CTUpdateArg)]: (CTUpdateArg)[_K] }): CTUpdateArg {
        return new CTUpdateArg(_o.redirectionNumber, _o.redirectionName, _o.basicCallInfoElements, _o.argumentExtension);
    }

}

/**
 * @summary The Leading Root Component Types of CTUpdateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CTUpdateArg: $.ComponentSpec[] = [
    new $.ComponentSpec("redirectionNumber", false, $.hasAnyTag),
    new $.ComponentSpec("redirectionName", true, $.or($.hasAnyTag, $.hasAnyTag, $.hasTag(_TagClass.context, 4))),
    new $.ComponentSpec("basicCallInfoElements", true, $.hasTag(_TagClass.application, 0)),
    new $.ComponentSpec("argumentExtension", true, $.or($.hasTag(_TagClass.context, 9), $.hasTag(_TagClass.context, 10)))
];

/**
 * @summary The Trailing Root Component Types of CTUpdateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CTUpdateArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CTUpdateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CTUpdateArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CTUpdateArg: $.ASN1Decoder<CTUpdateArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CTUpdateArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CTUpdateArg (el: _Element): CTUpdateArg {
    if (!_cached_decoder_for_CTUpdateArg) { _cached_decoder_for_CTUpdateArg = function (el: _Element): CTUpdateArg {
    let redirectionNumber!: PresentedNumberScreened;
    let redirectionName: OPTIONAL<Name>;
    let basicCallInfoElements: OPTIONAL<PSS1InformationElement>;
    let argumentExtension: OPTIONAL<CTUpdateArg_argumentExtension>;
    const callbacks: $.DecodingMap = {
        "redirectionNumber": (_el: _Element): void => { redirectionNumber = _decode_PresentedNumberScreened(_el); },
        "redirectionName": (_el: _Element): void => { redirectionName = _decode_Name(_el); },
        "basicCallInfoElements": (_el: _Element): void => { basicCallInfoElements = _decode_PSS1InformationElement(_el); },
        "argumentExtension": (_el: _Element): void => { argumentExtension = _decode_CTUpdateArg_argumentExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CTUpdateArg,
        _extension_additions_list_spec_for_CTUpdateArg,
        _root_component_type_list_2_spec_for_CTUpdateArg,
        undefined,
    );
    return new CTUpdateArg(
        redirectionNumber,
        redirectionName,
        basicCallInfoElements,
        argumentExtension
    );
}; }
    return _cached_decoder_for_CTUpdateArg(el);
}

let _cached_encoder_for_CTUpdateArg: $.ASN1Encoder<CTUpdateArg> | null = null;

/**
 * @summary Encodes a(n) CTUpdateArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CTUpdateArg, encoded as an ASN.1 Element.
 */
export
function _encode_CTUpdateArg (value: CTUpdateArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CTUpdateArg) { _cached_encoder_for_CTUpdateArg = function (value: CTUpdateArg, _elGetter: $.ASN1Encoder<CTUpdateArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_PresentedNumberScreened(value.redirectionNumber, $.BER));
    if (value.redirectionName !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_Name(value.redirectionName, $.BER));
    }
    if (value.basicCallInfoElements !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.application, 0, () => _encode_PSS1InformationElement, $.BER)(value.basicCallInfoElements, $.BER));
    }
    if (value.argumentExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_CTUpdateArg_argumentExtension(value.argumentExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CTUpdateArg(value, elGetter);
}

/* eslint-enable */
