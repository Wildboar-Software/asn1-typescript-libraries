/* eslint-disable */
import {
    type BOOLEAN,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyInfo, _decode_PartyInfo, _encode_PartyInfo } from "../SS-MCM-Operations-asn1-97/PartyInfo.ta.mjs";
import { MessageType, _decode_MessageType, _encode_MessageType, _enum_for_MessageType } from "../SS-MCM-Operations-asn1-97/MessageType.ta.mjs";
import { UpdateInfo, _decode_UpdateInfo, _encode_UpdateInfo } from "../SS-MCM-Operations-asn1-97/UpdateInfo.ta.mjs";
import { MCMExtensions, _decode_MCMExtensions, _encode_MCMExtensions } from "../SS-MCM-Operations-asn1-97/MCMExtensions.ta.mjs";

/**
 * @summary MCMUpdateArg
 * @description
 *
 * Argument of `mCMUpdate` (ECMA-347 §6.5.1.1.4). One Message
 * Type. `moreInfoFollows` is TRUE on every fragment except
 * the last when the update is split across invokes.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCMUpdateArg ::= SEQUENCE {
 *     partyInfo PartyInfo,
 *     messageType MessageType,
 *     updateInfo UpdateInfo,
 *     moreInfoFollows BOOLEAN DEFAULT FALSE,
 *     extensions MCMExtensions OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class MCMUpdateArg {
    /**
     * @summary `partyInfo`.
     * @description
     *
     * Served User address and Message Centre identity.
     * ECMA-347 §6.5.1.1.4.
     * @public
     * @readonly
     */
    readonly partyInfo: PartyInfo;
    /**
     * @summary `messageType`.
     * @description
     *
     * Message Type whose stored messages changed.
     * ECMA-347 §6.5.1.1.4.
     * @public
     * @readonly
     */
    readonly messageType: MessageType;
    /**
     * @summary `updateInfo`.
     * @description
     *
     * Compressed or complete information for new messages,
     * retrieved messages, or both. ECMA-347 §6.5.1.1.4.
     * @public
     * @readonly
     */
    readonly updateInfo: UpdateInfo;
    /**
     * @summary `moreInfoFollows`.
     * @description
     *
     * TRUE on every fragment except the last when the update
     * is split (§6.5.1.1.4). Omitted means FALSE. While it
     * is TRUE the Served User PINX runs timer T3
     * (§6.5.2.1.4).
     * @public
     * @readonly
     */
    readonly moreInfoFollows: OPTIONAL<BOOLEAN>;
    /**
     * @summary `extensions`.
     * @description
     *
     * Manufacturer-specific extension. `MCMExtSet` defines none.
     * The procedures do not mention this component. ECMA-347 §6.3.1.
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
        messageType: MessageType,
        updateInfo: UpdateInfo,
        moreInfoFollows?: OPTIONAL<BOOLEAN>,
        extensions?: OPTIONAL<MCMExtensions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.partyInfo = partyInfo;
        this.messageType = messageType;
        this.updateInfo = updateInfo;
        this.moreInfoFollows = moreInfoFollows;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MCMUpdateArg
     * @description
     * 
     * This takes an `object` and converts it to a `MCMUpdateArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MCMUpdateArg`.
     * @returns {MCMUpdateArg}
     */
    public static _from_object (_o: { [_K in keyof (MCMUpdateArg)]: (MCMUpdateArg)[_K] }): MCMUpdateArg {
        return new MCMUpdateArg(_o.partyInfo, _o.messageType, _o.updateInfo, _o.moreInfoFollows, _o.extensions, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `moreInfoFollows`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_moreInfoFollows () { return false; }        /**
         * @summary The enum used as the type of the component `messageType`
         * @public
         * @static
         */

    public static _enum_for_messageType = _enum_for_MessageType;
}

/**
 * @summary The Leading Root Component Types of MCMUpdateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MCMUpdateArg: $.ComponentSpec[] = [
    new $.ComponentSpec("partyInfo", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("messageType", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("updateInfo", false, $.hasAnyTag),
    new $.ComponentSpec("moreInfoFollows", true, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("extensions", true, $.or($.hasTag(_TagClass.universal, 5), $.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of MCMUpdateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MCMUpdateArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MCMUpdateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MCMUpdateArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MCMUpdateArg: $.ASN1Decoder<MCMUpdateArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCMUpdateArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCMUpdateArg (el: _Element): MCMUpdateArg {
    if (!_cached_decoder_for_MCMUpdateArg) { _cached_decoder_for_MCMUpdateArg = function (el: _Element): MCMUpdateArg {
    let partyInfo!: PartyInfo;
    let messageType!: MessageType;
    let updateInfo!: UpdateInfo;
    let moreInfoFollows: OPTIONAL<BOOLEAN> = MCMUpdateArg._default_value_for_moreInfoFollows;
    let extensions: OPTIONAL<MCMExtensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "partyInfo": (_el: _Element): void => { partyInfo = _decode_PartyInfo(_el); },
        "messageType": (_el: _Element): void => { messageType = _decode_MessageType(_el); },
        "updateInfo": (_el: _Element): void => { updateInfo = _decode_UpdateInfo(_el); },
        "moreInfoFollows": (_el: _Element): void => { moreInfoFollows = $._decodeBoolean(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_MCMExtensions(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MCMUpdateArg,
        _extension_additions_list_spec_for_MCMUpdateArg,
        _root_component_type_list_2_spec_for_MCMUpdateArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MCMUpdateArg(
        partyInfo,
        messageType,
        updateInfo,
        moreInfoFollows,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MCMUpdateArg(el);
}

let _cached_encoder_for_MCMUpdateArg: $.ASN1Encoder<MCMUpdateArg> | null = null;

/**
 * @summary Encodes a(n) MCMUpdateArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCMUpdateArg, encoded as an ASN.1 Element.
 */
export
function _encode_MCMUpdateArg (value: MCMUpdateArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCMUpdateArg) { _cached_encoder_for_MCMUpdateArg = function (value: MCMUpdateArg, _elGetter: $.ASN1Encoder<MCMUpdateArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ _encode_PartyInfo(value.partyInfo, $.BER);
    _components[_components_i++] = /* REQUIRED   */ _encode_MessageType(value.messageType, $.BER);
    _components[_components_i++] = /* REQUIRED   */ _encode_UpdateInfo(value.updateInfo, $.BER);
    if (value.moreInfoFollows !== undefined && !$.deepEq(value.moreInfoFollows, MCMUpdateArg._default_value_for_moreInfoFollows)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encodeBoolean(value.moreInfoFollows, $.BER);
    }
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
    return _cached_encoder_for_MCMUpdateArg(value, elGetter);
}

/* eslint-enable */
