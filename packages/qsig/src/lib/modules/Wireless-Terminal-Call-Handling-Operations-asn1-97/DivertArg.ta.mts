/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { type PresentedNumberScreened, _decode_PresentedNumberScreened, _encode_PresentedNumberScreened } from "../Addressing-Data-Elements-asn1-97/PresentedNumberScreened.ta.mjs";
import { type WtmIdentity, _decode_WtmIdentity, _encode_WtmIdentity } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/WtmIdentity.ta.mjs";
import { type PSS1InformationElement, _decode_PSS1InformationElement, _encode_PSS1InformationElement } from "../PSS1-generic-parameters-definition-asn1-97/PSS1InformationElement.ta.mjs";
import { type PartySubaddress, _decode_PartySubaddress, _encode_PartySubaddress } from "../Addressing-Data-Elements-asn1-97/PartySubaddress.ta.mjs";
import { type Name, _decode_Name, _encode_Name } from "../Name-Operations-asn1-97/Name.ta.mjs";
import { type WtmiExtension, _decode_WtmiExtension, _encode_WtmiExtension } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/WtmiExtension.ta.mjs";

/**
 * @summary DivertArg
 * @description
 *
 * Argument of `wtmiDivert` (ECMA-304 §6.5.2.1). Tells the Rerouteing PINX where
 * the WTMI user is visiting and which basic-call information to place in the
 * new SETUP (§6.5.1.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-304/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DivertArg ::= SEQUENCE {
 *     visitPINX PartyNumber,
 *     -- The PISN number of the Visitor PINX,
 *     -- always a Complete Number.
 *     callingNumber PresentedNumberScreened,
 *     wtmIdentity WtmIdentity,
 *     -- The PISN number (always a Complete Number)
 *     -- and/or an alternative identifier of the WTMI user.
 *     qSIGInfoElement PSS1InformationElement,
 *     -- The basic call information elements Bearer capability, High layer compatibility,
 *     -- Low layer compatibility, and Progress indicator
 *     -- can be embedded in the qSIGInfoElement in accordance with clause 6.5.2.1.
 *     callingUserSub [1] PartySubaddress OPTIONAL,
 *     callingName [2] Name OPTIONAL,
 *     wtmUserSub [3] PartySubaddress OPTIONAL,
 *     argExtension WtmiExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DivertArg {
    /**
     * @summary `visitPINX`.
     * @description
     *
     * PISN number of the Visitor PINX from the enquiry result. Always a
     * complete number (ECMA-304 §6.3.1, §6.5.2.1). The Rerouteing PINX uses it
     * as the Called party number of the new SETUP (§6.5.1.1).
     * @public
     * @readonly
     */
    readonly visitPINX: PartyNumber;
    /**
     * @summary `callingNumber`.
     * @description
     *
     * Calling party number from the incoming SETUP (ECMA-304 §6.5.2.1). Copied
     * to the Calling party number of the new SETUP (§6.5.1.1).
     * @public
     * @readonly
     */
    readonly callingNumber: PresentedNumberScreened;
    /**
     * @summary `wtmIdentity`.
     * @description
     *
     * Identity from the `wtmiEnquiry` result (ECMA-304 §6.5.2.1). Copied into
     * `wtmiInform` (§6.5.1.1).
     * @public
     * @readonly
     */
    readonly wtmIdentity: WtmIdentity;
    /**
     * @summary `qSIGInfoElement`.
     * @description
     *
     * Embedded bearer capability, plus high-layer compatibility, low-layer
     * compatibility, and progress indicator when the incoming SETUP contained
     * them (ECMA-304 §6.5.2.1). Copied into the new SETUP (§6.5.1.1).
     * @public
     * @readonly
     */
    readonly qSIGInfoElement: PSS1InformationElement;
    /**
     * @summary `callingUserSub`.
     * @description
     *
     * Calling party subaddress, included when the incoming SETUP contained one
     * (ECMA-304 §6.5.2.1). Copied to the new SETUP (§6.5.1.1).
     * @public
     * @readonly
     */
    readonly callingUserSub: OPTIONAL<PartySubaddress>;
    /**
     * @summary `callingName`.
     * @description
     *
     * Optional. ECMA-304 §6.5.2.1 does not say when it is included. SS-CNIP
     * uses a separate `callingName` invoke APDU (§6.8.1).
     * @public
     * @readonly
     */
    readonly callingName: OPTIONAL<Name>;
    /**
     * @summary `wtmUserSub`.
     * @description
     *
     * Called party subaddress, included when the incoming SETUP contained one
     * (ECMA-304 §6.5.2.1). Copied to the Called party subaddress of the new
     * SETUP (§6.5.1.1).
     * @public
     * @readonly
     */
    readonly wtmUserSub: OPTIONAL<PartySubaddress>;
    /**
     * @summary `argExtension`.
     * @description
     *
     * Manufacturer-specific extension. ECMA-304 §6.3.1 defines no members of
     * `WTMCHExtSet`.
     * @public
     * @readonly
     */
    readonly argExtension: OPTIONAL<WtmiExtension>;

    constructor (
        visitPINX: PartyNumber,
        callingNumber: PresentedNumberScreened,
        wtmIdentity: WtmIdentity,
        qSIGInfoElement: PSS1InformationElement,
        callingUserSub?: OPTIONAL<PartySubaddress>,
        callingName?: OPTIONAL<Name>,
        wtmUserSub?: OPTIONAL<PartySubaddress>,
        argExtension?: OPTIONAL<WtmiExtension>
    ) {
        this.visitPINX = visitPINX;
        this.callingNumber = callingNumber;
        this.wtmIdentity = wtmIdentity;
        this.qSIGInfoElement = qSIGInfoElement;
        this.callingUserSub = callingUserSub;
        this.callingName = callingName;
        this.wtmUserSub = wtmUserSub;
        this.argExtension = argExtension;
    }

    /**
     * @summary Restructures an object into a DivertArg
     * @description
     * 
     * This takes an `object` and converts it to a `DivertArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DivertArg`.
     * @returns {DivertArg}
     */
    public static _from_object (_o: { [_K in keyof (DivertArg)]: (DivertArg)[_K] }): DivertArg {
        return new DivertArg(_o.visitPINX, _o.callingNumber, _o.wtmIdentity, _o.qSIGInfoElement, _o.callingUserSub, _o.callingName, _o.wtmUserSub, _o.argExtension);
    }

}

/**
 * @summary The Leading Root Component Types of DivertArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DivertArg: $.ComponentSpec[] = [
    new $.ComponentSpec("visitPINX", false, $.hasAnyTag),
    new $.ComponentSpec("callingNumber", false, $.hasAnyTag),
    new $.ComponentSpec("wtmIdentity", false, $.hasAnyTag),
    new $.ComponentSpec("qSIGInfoElement", false, $.hasTag(_TagClass.application, 0)),
    new $.ComponentSpec("callingUserSub", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("callingName", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("wtmUserSub", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("argExtension", true, $.or($.hasTag(_TagClass.context, 4), $.hasTag(_TagClass.context, 5)))
];

/**
 * @summary The Trailing Root Component Types of DivertArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DivertArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DivertArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DivertArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DivertArg: $.ASN1Decoder<DivertArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DivertArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DivertArg (el: _Element): DivertArg {
    if (!_cached_decoder_for_DivertArg) { _cached_decoder_for_DivertArg = function (el: _Element): DivertArg {
    let visitPINX!: PartyNumber;
    let callingNumber!: PresentedNumberScreened;
    let wtmIdentity!: WtmIdentity;
    let qSIGInfoElement!: PSS1InformationElement;
    let callingUserSub: OPTIONAL<PartySubaddress>;
    let callingName: OPTIONAL<Name>;
    let wtmUserSub: OPTIONAL<PartySubaddress>;
    let argExtension: OPTIONAL<WtmiExtension>;
    const callbacks: $.DecodingMap = {
        "visitPINX": (_el: _Element): void => { visitPINX = _decode_PartyNumber(_el); },
        "callingNumber": (_el: _Element): void => { callingNumber = _decode_PresentedNumberScreened(_el); },
        "wtmIdentity": (_el: _Element): void => { wtmIdentity = _decode_WtmIdentity(_el); },
        "qSIGInfoElement": (_el: _Element): void => { qSIGInfoElement = _decode_PSS1InformationElement(_el); },
        "callingUserSub": (_el: _Element): void => { callingUserSub = $._decode_explicit<PartySubaddress>(() => _decode_PartySubaddress)(_el); },
        "callingName": (_el: _Element): void => { callingName = $._decode_explicit<Name>(() => _decode_Name)(_el); },
        "wtmUserSub": (_el: _Element): void => { wtmUserSub = $._decode_explicit<PartySubaddress>(() => _decode_PartySubaddress)(_el); },
        "argExtension": (_el: _Element): void => { argExtension = _decode_WtmiExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DivertArg,
        _extension_additions_list_spec_for_DivertArg,
        _root_component_type_list_2_spec_for_DivertArg,
        undefined,
    );
    return new DivertArg(
        visitPINX,
        callingNumber,
        wtmIdentity,
        qSIGInfoElement,
        callingUserSub,
        callingName,
        wtmUserSub,
        argExtension
    );
}; }
    return _cached_decoder_for_DivertArg(el);
}

let _cached_encoder_for_DivertArg: $.ASN1Encoder<DivertArg> | null = null;

/**
 * @summary Encodes a(n) DivertArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DivertArg, encoded as an ASN.1 Element.
 */
export
function _encode_DivertArg (value: DivertArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DivertArg) { _cached_encoder_for_DivertArg = function (value: DivertArg, _elGetter: $.ASN1Encoder<DivertArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.visitPINX, $.BER));
    _components.push(/* REQUIRED   */ _encode_PresentedNumberScreened(value.callingNumber, $.BER));
    _components.push(/* REQUIRED   */ _encode_WtmIdentity(value.wtmIdentity, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.application, 0, () => _encode_PSS1InformationElement, $.BER)(value.qSIGInfoElement, $.BER));
    if (value.callingUserSub !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_PartySubaddress, $.BER)(value.callingUserSub, $.BER));
    }
    if (value.callingName !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_Name, $.BER)(value.callingName, $.BER));
    }
    if (value.wtmUserSub !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_PartySubaddress, $.BER)(value.wtmUserSub, $.BER));
    }
    if (value.argExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_WtmiExtension(value.argExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DivertArg(value, elGetter);
}

/* eslint-enable */
