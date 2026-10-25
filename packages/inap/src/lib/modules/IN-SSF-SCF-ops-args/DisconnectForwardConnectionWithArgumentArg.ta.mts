/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type DisconnectForwardConnectionWithArgumentArg_partyToDisconnect, _decode_DisconnectForwardConnectionWithArgumentArg_partyToDisconnect, _encode_DisconnectForwardConnectionWithArgumentArg_partyToDisconnect } from "../IN-SSF-SCF-ops-args/DisconnectForwardConnectionWithArgumentArg-partyToDisconnect.ta.mjs";
// export { DisconnectForwardConnectionWithArgumentArg_partyToDisconnect, _decode_DisconnectForwardConnectionWithArgumentArg_partyToDisconnect, _encode_DisconnectForwardConnectionWithArgumentArg_partyToDisconnect } from "../IN-SSF-SCF-ops-args/DisconnectForwardConnectionWithArgumentArg-partyToDisconnect.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
import { type USIServiceIndicator, _decode_USIServiceIndicator, _encode_USIServiceIndicator } from "../IN-SSF-SCF-datatypes/USIServiceIndicator.ta.mjs";
// export { USIServiceIndicator, _decode_USIServiceIndicator, _encode_USIServiceIndicator } from "../IN-SSF-SCF-datatypes/USIServiceIndicator.ta.mjs";
import { type USIInformation, _decode_USIInformation, _encode_USIInformation } from "../IN-SSF-SCF-datatypes/USIInformation.ta.mjs";
// export { USIInformation, _decode_USIInformation, _encode_USIInformation } from "../IN-SSF-SCF-datatypes/USIInformation.ta.mjs";


/**
 * @summary DisconnectForwardConnectionWithArgumentArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DisconnectForwardConnectionWithArgumentArg ::= SEQUENCE {
 *   partyToDisconnect
 *     CHOICE {legID          [0]  LegID,
 *             callSegmentID  [1]  CallSegmentID},
 *   extensions           [2]  Extensions OPTIONAL,
 *   uSIServiceIndicator  [3]  USIServiceIndicator OPTIONAL,
 *   uSIInformation       [4]  USIInformation OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class DisconnectForwardConnectionWithArgumentArg {
    /**
     * @summary `partyToDisconnect`.
     * @public
     * @readonly
     */
    readonly partyToDisconnect: DisconnectForwardConnectionWithArgumentArg_partyToDisconnect;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary `uSIServiceIndicator`.
     * @public
     * @readonly
     */
    readonly uSIServiceIndicator: OPTIONAL<USIServiceIndicator>;
    /**
     * @summary `uSIInformation`.
     * @public
     * @readonly
     */
    readonly uSIInformation: OPTIONAL<USIInformation>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        partyToDisconnect: DisconnectForwardConnectionWithArgumentArg_partyToDisconnect,
        extensions?: OPTIONAL<Extensions>,
        uSIServiceIndicator?: OPTIONAL<USIServiceIndicator>,
        uSIInformation?: OPTIONAL<USIInformation>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.partyToDisconnect = partyToDisconnect;
        this.extensions = extensions;
        this.uSIServiceIndicator = uSIServiceIndicator;
        this.uSIInformation = uSIInformation;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a DisconnectForwardConnectionWithArgumentArg
     * @description
     * 
     * This takes an `object` and converts it to a `DisconnectForwardConnectionWithArgumentArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DisconnectForwardConnectionWithArgumentArg`.
     * @returns {DisconnectForwardConnectionWithArgumentArg}
     */
    public static _from_object (_o: { [_K in keyof (DisconnectForwardConnectionWithArgumentArg)]: (DisconnectForwardConnectionWithArgumentArg)[_K] }): DisconnectForwardConnectionWithArgumentArg {
        return new DisconnectForwardConnectionWithArgumentArg(_o.partyToDisconnect, _o.extensions, _o.uSIServiceIndicator, _o.uSIInformation, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of DisconnectForwardConnectionWithArgumentArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DisconnectForwardConnectionWithArgumentArg: $.ComponentSpec[] = [
    new $.ComponentSpec("partyToDisconnect", false, $.hasAnyTag),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("uSIServiceIndicator", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("uSIInformation", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of DisconnectForwardConnectionWithArgumentArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DisconnectForwardConnectionWithArgumentArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DisconnectForwardConnectionWithArgumentArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DisconnectForwardConnectionWithArgumentArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DisconnectForwardConnectionWithArgumentArg: $.ASN1Decoder<DisconnectForwardConnectionWithArgumentArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DisconnectForwardConnectionWithArgumentArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DisconnectForwardConnectionWithArgumentArg (el: _Element): DisconnectForwardConnectionWithArgumentArg {
    if (!_cached_decoder_for_DisconnectForwardConnectionWithArgumentArg) { _cached_decoder_for_DisconnectForwardConnectionWithArgumentArg = function (el: _Element): DisconnectForwardConnectionWithArgumentArg {
    let partyToDisconnect!: DisconnectForwardConnectionWithArgumentArg_partyToDisconnect;
    let extensions: OPTIONAL<Extensions>;
    let uSIServiceIndicator: OPTIONAL<USIServiceIndicator>;
    let uSIInformation: OPTIONAL<USIInformation>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "partyToDisconnect": (_el: _Element): void => { partyToDisconnect = _decode_DisconnectForwardConnectionWithArgumentArg_partyToDisconnect(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "uSIServiceIndicator": (_el: _Element): void => { uSIServiceIndicator = $._decode_explicit<USIServiceIndicator>(() => _decode_USIServiceIndicator)(_el); },
        "uSIInformation": (_el: _Element): void => { uSIInformation = $._decode_implicit<USIInformation>(() => _decode_USIInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DisconnectForwardConnectionWithArgumentArg,
        _extension_additions_list_spec_for_DisconnectForwardConnectionWithArgumentArg,
        _root_component_type_list_2_spec_for_DisconnectForwardConnectionWithArgumentArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new DisconnectForwardConnectionWithArgumentArg(
        partyToDisconnect,
        extensions,
        uSIServiceIndicator,
        uSIInformation,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_DisconnectForwardConnectionWithArgumentArg(el);
}

let _cached_encoder_for_DisconnectForwardConnectionWithArgumentArg: $.ASN1Encoder<DisconnectForwardConnectionWithArgumentArg> | null = null;

/**
 * @summary Encodes a(n) DisconnectForwardConnectionWithArgumentArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DisconnectForwardConnectionWithArgumentArg, encoded as an ASN.1 Element.
 */
export
function _encode_DisconnectForwardConnectionWithArgumentArg (value: DisconnectForwardConnectionWithArgumentArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DisconnectForwardConnectionWithArgumentArg) { _cached_encoder_for_DisconnectForwardConnectionWithArgumentArg = function (value: DisconnectForwardConnectionWithArgumentArg, elGetter: $.ASN1Encoder<DisconnectForwardConnectionWithArgumentArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ _encode_DisconnectForwardConnectionWithArgumentArg_partyToDisconnect(value.partyToDisconnect, $.BER);
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.uSIServiceIndicator !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_USIServiceIndicator, $.BER)(value.uSIServiceIndicator, $.BER);
    }
    if (value.uSIInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_USIInformation, $.BER)(value.uSIInformation, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DisconnectForwardConnectionWithArgumentArg(value, elGetter);
}


/* eslint-enable */
