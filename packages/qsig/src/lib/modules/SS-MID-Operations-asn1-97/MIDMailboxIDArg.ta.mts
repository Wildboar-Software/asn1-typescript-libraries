/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyInfo, _decode_PartyInfo, _encode_PartyInfo } from "../SS-MID-Operations-asn1-97/PartyInfo.ta.mjs";
import { Name, _decode_Name, _encode_Name } from "../Name-Operations-asn1-97/Name.ta.mjs";
import { String, _decode_String, _encode_String } from "../SS-MID-Operations-asn1-97/String.ta.mjs";
import { MIDExtensions, _decode_MIDExtensions, _encode_MIDExtensions } from "../SS-MID-Operations-asn1-97/MIDExtensions.ta.mjs";

/**
 * @summary MIDMailboxIDArg
 * @description
 *
 * Argument of `mIDMailboxID` (ECMA-347 §7.5.1.1.2). The
 * mailbox identifier is required. Message Type and the
 * Served User's name are optional.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MIDMailboxIDArg ::= SEQUENCE {
 *     partyInfo PartyInfo,
 *     servedUserName Name OPTIONAL,
 *     mailBox String,
 *     extensions MIDExtensions OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class MIDMailboxIDArg {
    /**
     * @summary `partyInfo`.
     * @description
     *
     * Served User address, Message Centre identity, and an
     * optional Message Type. ECMA-347 §7.5.1.1.2.
     * @public
     * @readonly
     */
    readonly partyInfo: PartyInfo;
    /**
     * @summary `servedUserName`.
     * @description
     *
     * Name of the Served User, when sent.
     * ECMA-347 §7.5.1.1.2.
     * @public
     * @readonly
     */
    readonly servedUserName: OPTIONAL<Name>;
    /**
     * @summary `mailBox`.
     * @description
     *
     * Identifier of the mailbox, for example its name.
     * Required on this operation. ECMA-347 §7.5.1.1.2.
     * @public
     * @readonly
     */
    readonly mailBox: String;
    /**
     * @summary `extensions`.
     * @description
     *
     * Manufacturer-specific extension. `MIDExtSet` defines none.
     * The procedures do not mention this component. ECMA-347 §7.3.1.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<MIDExtensions>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        partyInfo: PartyInfo,
        servedUserName: OPTIONAL<Name>,
        mailBox: String,
        extensions: OPTIONAL<MIDExtensions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.partyInfo = partyInfo;
        this.servedUserName = servedUserName;
        this.mailBox = mailBox;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MIDMailboxIDArg
     * @description
     * 
     * This takes an `object` and converts it to a `MIDMailboxIDArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MIDMailboxIDArg`.
     * @returns {MIDMailboxIDArg}
     */
    public static _from_object (_o: { [_K in keyof (MIDMailboxIDArg)]: (MIDMailboxIDArg)[_K] }): MIDMailboxIDArg {
        return new MIDMailboxIDArg(_o.partyInfo, _o.servedUserName, _o.mailBox, _o.extensions, _o._unrecognizedExtensionsList);
    }

}

/**
 * @summary The Leading Root Component Types of MIDMailboxIDArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MIDMailboxIDArg: $.ComponentSpec[] = [
    new $.ComponentSpec("partyInfo", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("servedUserName", true, $.or($.hasAnyTag, $.hasAnyTag, $.hasTag(_TagClass.context, 4))),
    new $.ComponentSpec("mailBox", false, $.hasAnyTag),
    new $.ComponentSpec("extensions", true, $.or($.hasTag(_TagClass.universal, 5), $.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of MIDMailboxIDArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MIDMailboxIDArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MIDMailboxIDArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MIDMailboxIDArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MIDMailboxIDArg: $.ASN1Decoder<MIDMailboxIDArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MIDMailboxIDArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MIDMailboxIDArg (el: _Element): MIDMailboxIDArg {
    if (!_cached_decoder_for_MIDMailboxIDArg) { _cached_decoder_for_MIDMailboxIDArg = function (el: _Element): MIDMailboxIDArg {
    let partyInfo!: PartyInfo;
    let servedUserName: OPTIONAL<Name>;
    let mailBox!: String;
    let extensions: OPTIONAL<MIDExtensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "partyInfo": (_el: _Element): void => { partyInfo = _decode_PartyInfo(_el); },
        "servedUserName": (_el: _Element): void => { servedUserName = _decode_Name(_el); },
        "mailBox": (_el: _Element): void => { mailBox = _decode_String(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_MIDExtensions(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MIDMailboxIDArg,
        _extension_additions_list_spec_for_MIDMailboxIDArg,
        _root_component_type_list_2_spec_for_MIDMailboxIDArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MIDMailboxIDArg(
        partyInfo,
        servedUserName,
        mailBox,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MIDMailboxIDArg(el);
}

let _cached_encoder_for_MIDMailboxIDArg: $.ASN1Encoder<MIDMailboxIDArg> | null = null;

/**
 * @summary Encodes a(n) MIDMailboxIDArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MIDMailboxIDArg, encoded as an ASN.1 Element.
 */
export
function _encode_MIDMailboxIDArg (value: MIDMailboxIDArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MIDMailboxIDArg) { _cached_encoder_for_MIDMailboxIDArg = function (value: MIDMailboxIDArg, _elGetter: $.ASN1Encoder<MIDMailboxIDArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ _encode_PartyInfo(value.partyInfo, $.BER);
    if (value.servedUserName !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ _encode_Name(value.servedUserName, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ _encode_String(value.mailBox, $.BER);
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ _encode_MIDExtensions(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MIDMailboxIDArg(value, elGetter);
}

/* eslint-enable */
