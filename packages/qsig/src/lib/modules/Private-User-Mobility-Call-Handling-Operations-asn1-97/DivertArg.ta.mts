/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { PresentedNumberScreened, _decode_PresentedNumberScreened, _encode_PresentedNumberScreened } from "../Addressing-Data-Elements-asn1-97/PresentedNumberScreened.ta.mjs";
import { PumIdentity, _decode_PumIdentity, _encode_PumIdentity } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/PumIdentity.ta.mjs";
import { PSS1InformationElement, _decode_PSS1InformationElement, _encode_PSS1InformationElement } from "../PSS1-generic-parameters-definition-asn1-97/PSS1InformationElement.ta.mjs";
import { PartySubaddress, _decode_PartySubaddress, _encode_PartySubaddress } from "../Addressing-Data-Elements-asn1-97/PartySubaddress.ta.mjs";
import { Name, _decode_Name, _encode_Name } from "../Name-Operations-asn1-97/Name.ta.mjs";
import { PumiExtension, _decode_PumiExtension, _encode_PumiExtension } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/PumiExtension.ta.mjs";

/**
 * @summary DivertArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DivertArg ::= SEQUENCE {
 *     hostingAddr PartyNumber,
 *     -- The PISN number of the hosting user,
 *     -- always a Complete Number.
 *     callingNumber PresentedNumberScreened,
 *     pumIdentity PumIdentity,
 *     -- The PISN number (always a Complete Number)
 *     -- and/or an alternative identifier of the PUM user.
 *     qSIGInfoElement PSS1InformationElement,
 *     -- The basic call information elements Bearer capability, High layer compatibility,
 *     -- Low layer compatibility, and Progress indicator
 *     -- can be embedded in the qSIGInfoElement in accordance with clause 6.5.2.1.
 *     callingUserSub [1] PartySubaddress OPTIONAL,
 *     callingUserName [2] Name OPTIONAL,
 *     pumUserSub [3] PartySubaddress OPTIONAL,
 *     argExtension PumiExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DivertArg {
    /**
     * @summary `hostingAddr`.
     * @public
     * @readonly
     */
    readonly hostingAddr: PartyNumber;
    /**
     * @summary `callingNumber`.
     * @public
     * @readonly
     */
    readonly callingNumber: PresentedNumberScreened;
    /**
     * @summary `pumIdentity`.
     * @public
     * @readonly
     */
    readonly pumIdentity: PumIdentity;
    /**
     * @summary `qSIGInfoElement`.
     * @public
     * @readonly
     */
    readonly qSIGInfoElement: PSS1InformationElement;
    /**
     * @summary `callingUserSub`.
     * @public
     * @readonly
     */
    readonly callingUserSub: OPTIONAL<PartySubaddress>;
    /**
     * @summary `callingUserName`.
     * @public
     * @readonly
     */
    readonly callingUserName: OPTIONAL<Name>;
    /**
     * @summary `pumUserSub`.
     * @public
     * @readonly
     */
    readonly pumUserSub: OPTIONAL<PartySubaddress>;
    /**
     * @summary `argExtension`.
     * @public
     * @readonly
     */
    readonly argExtension: OPTIONAL<PumiExtension>;

    constructor (
        hostingAddr: PartyNumber,
        callingNumber: PresentedNumberScreened,
        pumIdentity: PumIdentity,
        qSIGInfoElement: PSS1InformationElement,
        callingUserSub: OPTIONAL<PartySubaddress>,
        callingUserName: OPTIONAL<Name>,
        pumUserSub: OPTIONAL<PartySubaddress>,
        argExtension: OPTIONAL<PumiExtension>
    ) {
        this.hostingAddr = hostingAddr;
        this.callingNumber = callingNumber;
        this.pumIdentity = pumIdentity;
        this.qSIGInfoElement = qSIGInfoElement;
        this.callingUserSub = callingUserSub;
        this.callingUserName = callingUserName;
        this.pumUserSub = pumUserSub;
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
        return new DivertArg(_o.hostingAddr, _o.callingNumber, _o.pumIdentity, _o.qSIGInfoElement, _o.callingUserSub, _o.callingUserName, _o.pumUserSub, _o.argExtension);
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
    new $.ComponentSpec("hostingAddr", false, $.hasAnyTag),
    new $.ComponentSpec("callingNumber", false, $.hasAnyTag),
    new $.ComponentSpec("pumIdentity", false, $.hasAnyTag),
    new $.ComponentSpec("qSIGInfoElement", false, $.hasTag(_TagClass.application, 0)),
    new $.ComponentSpec("callingUserSub", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("callingUserName", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pumUserSub", true, $.hasTag(_TagClass.context, 3)),
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
    let hostingAddr!: PartyNumber;
    let callingNumber!: PresentedNumberScreened;
    let pumIdentity!: PumIdentity;
    let qSIGInfoElement!: PSS1InformationElement;
    let callingUserSub: OPTIONAL<PartySubaddress>;
    let callingUserName: OPTIONAL<Name>;
    let pumUserSub: OPTIONAL<PartySubaddress>;
    let argExtension: OPTIONAL<PumiExtension>;
    const callbacks: $.DecodingMap = {
        "hostingAddr": (_el: _Element): void => { hostingAddr = _decode_PartyNumber(_el); },
        "callingNumber": (_el: _Element): void => { callingNumber = _decode_PresentedNumberScreened(_el); },
        "pumIdentity": (_el: _Element): void => { pumIdentity = _decode_PumIdentity(_el); },
        "qSIGInfoElement": (_el: _Element): void => { qSIGInfoElement = _decode_PSS1InformationElement(_el); },
        "callingUserSub": (_el: _Element): void => { callingUserSub = $._decode_explicit<PartySubaddress>(() => _decode_PartySubaddress)(_el); },
        "callingUserName": (_el: _Element): void => { callingUserName = $._decode_explicit<Name>(() => _decode_Name)(_el); },
        "pumUserSub": (_el: _Element): void => { pumUserSub = $._decode_explicit<PartySubaddress>(() => _decode_PartySubaddress)(_el); },
        "argExtension": (_el: _Element): void => { argExtension = _decode_PumiExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DivertArg,
        _extension_additions_list_spec_for_DivertArg,
        _root_component_type_list_2_spec_for_DivertArg,
        undefined,
    );
    return new DivertArg(
        hostingAddr,
        callingNumber,
        pumIdentity,
        qSIGInfoElement,
        callingUserSub,
        callingUserName,
        pumUserSub,
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
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.hostingAddr, $.BER));
    _components.push(/* REQUIRED   */ _encode_PresentedNumberScreened(value.callingNumber, $.BER));
    _components.push(/* REQUIRED   */ _encode_PumIdentity(value.pumIdentity, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.application, 0, () => _encode_PSS1InformationElement, $.BER)(value.qSIGInfoElement, $.BER));
    if (value.callingUserSub !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_PartySubaddress, $.BER)(value.callingUserSub, $.BER));
    }
    if (value.callingUserName !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_Name, $.BER)(value.callingUserName, $.BER));
    }
    if (value.pumUserSub !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_PartySubaddress, $.BER)(value.pumUserSub, $.BER));
    }
    if (value.argExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_PumiExtension(value.argExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DivertArg(value, elGetter);
}

/* eslint-enable */
