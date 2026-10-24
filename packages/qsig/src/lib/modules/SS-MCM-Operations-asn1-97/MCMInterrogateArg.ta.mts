/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyInfo, _decode_PartyInfo, _encode_PartyInfo } from "../SS-MCM-Operations-asn1-97/PartyInfo.ta.mjs";
import { MessageType, _decode_MessageType, _encode_MessageType } from "../SS-MCM-Operations-asn1-97/MessageType.ta.mjs";
import { MCMExtensions, _decode_MCMExtensions, _encode_MCMExtensions } from "../SS-MCM-Operations-asn1-97/MCMExtensions.ta.mjs";

/**
 * @summary MCMInterrogateArg
 * @description
 *
 * Argument of `mCMInterrogate` (ECMA-347 §6.5.2.1.1). The
 * Served User asks how monitoring is set for the listed
 * Message Types.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCMInterrogateArg ::= SEQUENCE {
 *     partyInfo PartyInfo,
 *     interrogateInfo SEQUENCE OF MessageType,
 *     extensions MCMExtensions OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class MCMInterrogateArg {
    /**
     * @summary `partyInfo`.
     * @description
     *
     * Served User address and Message Centre identity.
     * ECMA-347 §6.5.2.1.1.
     * @public
     * @readonly
     */
    readonly partyInfo: PartyInfo;
    /**
     * @summary `interrogateInfo`.
     * @description
     *
     * Message Types whose configuration is requested.
     * ECMA-347 §6.5.2.1.1.
     * @public
     * @readonly
     */
    readonly interrogateInfo: MessageType[];
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
        interrogateInfo: MessageType[],
        extensions?: OPTIONAL<MCMExtensions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.partyInfo = partyInfo;
        this.interrogateInfo = interrogateInfo;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MCMInterrogateArg
     * @description
     * 
     * This takes an `object` and converts it to a `MCMInterrogateArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MCMInterrogateArg`.
     * @returns {MCMInterrogateArg}
     */
    public static _from_object (_o: { [_K in keyof (MCMInterrogateArg)]: (MCMInterrogateArg)[_K] }): MCMInterrogateArg {
        return new MCMInterrogateArg(_o.partyInfo, _o.interrogateInfo, _o.extensions, _o._unrecognizedExtensionsList);
    }

}

/**
 * @summary The Leading Root Component Types of MCMInterrogateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MCMInterrogateArg: $.ComponentSpec[] = [
    new $.ComponentSpec("partyInfo", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("interrogateInfo", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.or($.hasTag(_TagClass.universal, 5), $.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of MCMInterrogateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MCMInterrogateArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MCMInterrogateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MCMInterrogateArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MCMInterrogateArg: $.ASN1Decoder<MCMInterrogateArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCMInterrogateArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCMInterrogateArg (el: _Element): MCMInterrogateArg {
    if (!_cached_decoder_for_MCMInterrogateArg) { _cached_decoder_for_MCMInterrogateArg = function (el: _Element): MCMInterrogateArg {
    let partyInfo!: PartyInfo;
    let interrogateInfo!: MessageType[];
    let extensions: OPTIONAL<MCMExtensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "partyInfo": (_el: _Element): void => { partyInfo = _decode_PartyInfo(_el); },
        "interrogateInfo": (_el: _Element): void => { interrogateInfo = $._decodeSequenceOf<MessageType>(() => _decode_MessageType)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_MCMExtensions(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MCMInterrogateArg,
        _extension_additions_list_spec_for_MCMInterrogateArg,
        _root_component_type_list_2_spec_for_MCMInterrogateArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MCMInterrogateArg(
        partyInfo,
        interrogateInfo,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MCMInterrogateArg(el);
}

let _cached_encoder_for_MCMInterrogateArg: $.ASN1Encoder<MCMInterrogateArg> | null = null;

/**
 * @summary Encodes a(n) MCMInterrogateArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCMInterrogateArg, encoded as an ASN.1 Element.
 */
export
function _encode_MCMInterrogateArg (value: MCMInterrogateArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCMInterrogateArg) { _cached_encoder_for_MCMInterrogateArg = function (value: MCMInterrogateArg, _elGetter: $.ASN1Encoder<MCMInterrogateArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ _encode_PartyInfo(value.partyInfo, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encodeSequenceOf<MessageType>(() => _encode_MessageType, $.BER)(value.interrogateInfo, $.BER);
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
    return _cached_encoder_for_MCMInterrogateArg(value, elGetter);
}

/* eslint-enable */
