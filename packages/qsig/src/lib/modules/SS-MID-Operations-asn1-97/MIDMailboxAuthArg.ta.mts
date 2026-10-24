/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyInfo, _decode_PartyInfo, _encode_PartyInfo } from "../SS-MID-Operations-asn1-97/PartyInfo.ta.mjs";
import { Name, _decode_Name, _encode_Name } from "../Name-Operations-asn1-97/Name.ta.mjs";
import { String, _decode_String, _encode_String } from "../SS-MID-Operations-asn1-97/String.ta.mjs";
import { MIDExtensions, _decode_MIDExtensions, _encode_MIDExtensions } from "../SS-MID-Operations-asn1-97/MIDExtensions.ta.mjs";

/**
 * @summary MIDMailboxAuthArg
 * @description
 *
 * Argument of `mIDMailboxAuth` (ECMA-347 §7.5.2.1.2). The
 * password is required. The mailbox identifier, Message
 * Type, and Served User name are optional.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MIDMailboxAuthArg ::= SEQUENCE {
 *     partyInfo PartyInfo,
 *     servedUserName Name OPTIONAL,
 *     mailBox [8] String OPTIONAL,
 *     password String,
 *     extensions MIDExtensions OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class MIDMailboxAuthArg {
    /**
     * @summary `partyInfo`.
     * @description
     *
     * Served User address, Message Centre identity, and an
     * optional Message Type. ECMA-347 §7.5.2.1.2.
     * @public
     * @readonly
     */
    readonly partyInfo: PartyInfo;
    /**
     * @summary `servedUserName`.
     * @description
     *
     * Name of the Served User, when sent.
     * ECMA-347 §7.5.2.1.2.
     * @public
     * @readonly
     */
    readonly servedUserName: OPTIONAL<Name>;
    /**
     * @summary `mailBox`.
     * @description
     *
     * Mailbox identifier, for example its name. Optional
     * here; required on `mIDMailboxID`. ECMA-347 §7.5.2.1.2.
     * §7.3.1 does not explain context tag 8.
     * @public
     * @readonly
     */
    readonly mailBox: OPTIONAL<String>;
    /**
     * @summary `password`.
     * @description
     *
     * Password the Served User presents for that mailbox.
     * ECMA-347 §7.5.2.1.2.
     * @public
     * @readonly
     */
    readonly password: String;
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
        mailBox: OPTIONAL<String>,
        password: String,
        extensions?: OPTIONAL<MIDExtensions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.partyInfo = partyInfo;
        this.servedUserName = servedUserName;
        this.mailBox = mailBox;
        this.password = password;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MIDMailboxAuthArg
     * @description
     * 
     * This takes an `object` and converts it to a `MIDMailboxAuthArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MIDMailboxAuthArg`.
     * @returns {MIDMailboxAuthArg}
     */
    public static _from_object (_o: { [_K in keyof (MIDMailboxAuthArg)]: (MIDMailboxAuthArg)[_K] }): MIDMailboxAuthArg {
        return new MIDMailboxAuthArg(_o.partyInfo, _o.servedUserName, _o.mailBox, _o.password, _o.extensions, _o._unrecognizedExtensionsList);
    }

}

/**
 * @summary The Leading Root Component Types of MIDMailboxAuthArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MIDMailboxAuthArg: $.ComponentSpec[] = [
    new $.ComponentSpec("partyInfo", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("servedUserName", true, $.or($.hasAnyTag, $.hasAnyTag, $.hasTag(_TagClass.context, 4))),
    new $.ComponentSpec("mailBox", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("password", false, $.hasAnyTag),
    new $.ComponentSpec("extensions", true, $.or($.hasTag(_TagClass.universal, 5), $.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of MIDMailboxAuthArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MIDMailboxAuthArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MIDMailboxAuthArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MIDMailboxAuthArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MIDMailboxAuthArg: $.ASN1Decoder<MIDMailboxAuthArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MIDMailboxAuthArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MIDMailboxAuthArg (el: _Element): MIDMailboxAuthArg {
    if (!_cached_decoder_for_MIDMailboxAuthArg) { _cached_decoder_for_MIDMailboxAuthArg = function (el: _Element): MIDMailboxAuthArg {
    let partyInfo!: PartyInfo;
    let servedUserName: OPTIONAL<Name>;
    let mailBox: OPTIONAL<String>;
    let password!: String;
    let extensions: OPTIONAL<MIDExtensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "partyInfo": (_el: _Element): void => { partyInfo = _decode_PartyInfo(_el); },
        "servedUserName": (_el: _Element): void => { servedUserName = _decode_Name(_el); },
        "mailBox": (_el: _Element): void => { mailBox = $._decode_explicit<String>(() => _decode_String)(_el); },
        "password": (_el: _Element): void => { password = _decode_String(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_MIDExtensions(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MIDMailboxAuthArg,
        _extension_additions_list_spec_for_MIDMailboxAuthArg,
        _root_component_type_list_2_spec_for_MIDMailboxAuthArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MIDMailboxAuthArg(
        partyInfo,
        servedUserName,
        mailBox,
        password,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MIDMailboxAuthArg(el);
}

let _cached_encoder_for_MIDMailboxAuthArg: $.ASN1Encoder<MIDMailboxAuthArg> | null = null;

/**
 * @summary Encodes a(n) MIDMailboxAuthArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MIDMailboxAuthArg, encoded as an ASN.1 Element.
 */
export
function _encode_MIDMailboxAuthArg (value: MIDMailboxAuthArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MIDMailboxAuthArg) { _cached_encoder_for_MIDMailboxAuthArg = function (value: MIDMailboxAuthArg, _elGetter: $.ASN1Encoder<MIDMailboxAuthArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ _encode_PartyInfo(value.partyInfo, $.BER);
    if (value.servedUserName !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ _encode_Name(value.servedUserName, $.BER);
    }
    if (value.mailBox !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 8, () => _encode_String, $.BER)(value.mailBox, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ _encode_String(value.password, $.BER);
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
    return _cached_encoder_for_MIDMailboxAuthArg(value, elGetter);
}

/* eslint-enable */
