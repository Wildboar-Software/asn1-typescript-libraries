/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyInfo, _decode_PartyInfo, _encode_PartyInfo } from "../SS-MCM-Operations-asn1-97/PartyInfo.ta.mjs";
import { MailboxFullFor, _decode_MailboxFullFor, _encode_MailboxFullFor } from "../SS-MCM-Operations-asn1-97/MailboxFullFor.ta.mjs";
import { MCMExtensions, _decode_MCMExtensions, _encode_MCMExtensions } from "../SS-MCM-Operations-asn1-97/MCMExtensions.ta.mjs";

/**
 * @summary MCMailboxFullArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCMailboxFullArg ::= SEQUENCE {
 *     partyInfo PartyInfo,
 *     mailboxFullFor MailboxFullFor,
 *     extensions MCMExtensions OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class MCMailboxFullArg {
    /**
     * @summary `partyInfo`.
     * @public
     * @readonly
     */
    readonly partyInfo: PartyInfo;
    /**
     * @summary `mailboxFullFor`.
     * @public
     * @readonly
     */
    readonly mailboxFullFor: MailboxFullFor;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<MCMExtensions>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        partyInfo: PartyInfo,
        mailboxFullFor: MailboxFullFor,
        extensions: OPTIONAL<MCMExtensions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.partyInfo = partyInfo;
        this.mailboxFullFor = mailboxFullFor;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MCMailboxFullArg
     * @description
     * 
     * This takes an `object` and converts it to a `MCMailboxFullArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MCMailboxFullArg`.
     * @returns {MCMailboxFullArg}
     */
    public static _from_object (_o: { [_K in keyof (MCMailboxFullArg)]: (MCMailboxFullArg)[_K] }): MCMailboxFullArg {
        return new MCMailboxFullArg(_o.partyInfo, _o.mailboxFullFor, _o.extensions, _o._unrecognizedExtensionsList);
    }

}

/**
 * @summary The Leading Root Component Types of MCMailboxFullArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MCMailboxFullArg: $.ComponentSpec[] = [
    new $.ComponentSpec("partyInfo", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("mailboxFullFor", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.or($.hasTag(_TagClass.universal, 5), $.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of MCMailboxFullArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MCMailboxFullArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MCMailboxFullArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MCMailboxFullArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MCMailboxFullArg: $.ASN1Decoder<MCMailboxFullArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCMailboxFullArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCMailboxFullArg (el: _Element): MCMailboxFullArg {
    if (!_cached_decoder_for_MCMailboxFullArg) { _cached_decoder_for_MCMailboxFullArg = function (el: _Element): MCMailboxFullArg {
    let partyInfo!: PartyInfo;
    let mailboxFullFor!: MailboxFullFor;
    let extensions: OPTIONAL<MCMExtensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "partyInfo": (_el: _Element): void => { partyInfo = _decode_PartyInfo(_el); },
        "mailboxFullFor": (_el: _Element): void => { mailboxFullFor = _decode_MailboxFullFor(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_MCMExtensions(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MCMailboxFullArg,
        _extension_additions_list_spec_for_MCMailboxFullArg,
        _root_component_type_list_2_spec_for_MCMailboxFullArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MCMailboxFullArg(
        partyInfo,
        mailboxFullFor,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MCMailboxFullArg(el);
}

let _cached_encoder_for_MCMailboxFullArg: $.ASN1Encoder<MCMailboxFullArg> | null = null;

/**
 * @summary Encodes a(n) MCMailboxFullArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCMailboxFullArg, encoded as an ASN.1 Element.
 */
export
function _encode_MCMailboxFullArg (value: MCMailboxFullArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCMailboxFullArg) { _cached_encoder_for_MCMailboxFullArg = function (value: MCMailboxFullArg, _elGetter: $.ASN1Encoder<MCMailboxFullArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ _encode_PartyInfo(value.partyInfo, $.BER);
    _components[_components_i++] = /* REQUIRED   */ _encode_MailboxFullFor(value.mailboxFullFor, $.BER);
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ _encode_MCMExtensions(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MCMailboxFullArg(value, elGetter);
}

/* eslint-enable */
