/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InformationToSend, _decode_InformationToSend, _encode_InformationToSend } from "../IN-CS2-datatypes/InformationToSend.ta.mjs";
// export { InformationToSend, _decode_InformationToSend, _encode_InformationToSend } from "../IN-CS2-datatypes/InformationToSend.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";
import { PlayAnnouncementArg_connectedParty, _decode_PlayAnnouncementArg_connectedParty, _encode_PlayAnnouncementArg_connectedParty } from "../IN-CS2-SCF-SRF-ops-args/PlayAnnouncementArg-connectedParty.ta.mjs";
// export { PlayAnnouncementArg_connectedParty, _decode_PlayAnnouncementArg_connectedParty, _encode_PlayAnnouncementArg_connectedParty } from "../IN-CS2-SCF-SRF-ops-args/PlayAnnouncementArg-connectedParty.ta.mjs";


/**
 * @summary PlayAnnouncementArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PlayAnnouncementArg ::= SEQUENCE {
 *   informationToSend            [0]  InformationToSend,
 *   disconnectFromIPForbidden    [1]  BOOLEAN DEFAULT TRUE,
 *   requestAnnouncementComplete  [2]  BOOLEAN DEFAULT TRUE,
 *   extensions
 *     [3]  SEQUENCE OF
 *            ExtensionField OPTIONAL,
 *   connectedParty
 *     CHOICE {legID          [4]  LegID,
 *             callSegmentID  [5]  CallSegmentID} OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class PlayAnnouncementArg {
    /**
     * @summary `informationToSend`.
     * @public
     * @readonly
     */
    readonly informationToSend: InformationToSend;
    /**
     * @summary `disconnectFromIPForbidden`.
     * @public
     * @readonly
     */
    readonly disconnectFromIPForbidden: OPTIONAL<BOOLEAN>;
    /**
     * @summary `requestAnnouncementComplete`.
     * @public
     * @readonly
     */
    readonly requestAnnouncementComplete: OPTIONAL<BOOLEAN>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<ExtensionField[]>;
    /**
     * @summary `connectedParty`.
     * @public
     * @readonly
     */
    readonly connectedParty: OPTIONAL<PlayAnnouncementArg_connectedParty>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        informationToSend: InformationToSend,
        disconnectFromIPForbidden?: OPTIONAL<BOOLEAN>,
        requestAnnouncementComplete?: OPTIONAL<BOOLEAN>,
        extensions?: OPTIONAL<ExtensionField[]>,
        connectedParty?: OPTIONAL<PlayAnnouncementArg_connectedParty>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.informationToSend = informationToSend;
        this.disconnectFromIPForbidden = disconnectFromIPForbidden;
        this.requestAnnouncementComplete = requestAnnouncementComplete;
        this.extensions = extensions;
        this.connectedParty = connectedParty;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PlayAnnouncementArg
     * @description
     * 
     * This takes an `object` and converts it to a `PlayAnnouncementArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PlayAnnouncementArg`.
     * @returns {PlayAnnouncementArg}
     */
    public static _from_object (_o: { [_K in keyof (PlayAnnouncementArg)]: (PlayAnnouncementArg)[_K] }): PlayAnnouncementArg {
        return new PlayAnnouncementArg(_o.informationToSend, _o.disconnectFromIPForbidden, _o.requestAnnouncementComplete, _o.extensions, _o.connectedParty, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `disconnectFromIPForbidden`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_disconnectFromIPForbidden () { return true; }
    /**
     * @summary Getter that returns the default value for `requestAnnouncementComplete`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_requestAnnouncementComplete () { return true; }
}

/**
 * @summary The Leading Root Component Types of PlayAnnouncementArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PlayAnnouncementArg: $.ComponentSpec[] = [
    new $.ComponentSpec("informationToSend", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("disconnectFromIPForbidden", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("requestAnnouncementComplete", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("connectedParty", true, $.or($.hasTag(_TagClass.context, 4), $.hasTag(_TagClass.context, 5)))
];

/**
 * @summary The Trailing Root Component Types of PlayAnnouncementArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PlayAnnouncementArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PlayAnnouncementArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PlayAnnouncementArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PlayAnnouncementArg: $.ASN1Decoder<PlayAnnouncementArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PlayAnnouncementArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PlayAnnouncementArg (el: _Element): PlayAnnouncementArg {
    if (!_cached_decoder_for_PlayAnnouncementArg) { _cached_decoder_for_PlayAnnouncementArg = function (el: _Element): PlayAnnouncementArg {
    let informationToSend!: InformationToSend;
    let disconnectFromIPForbidden: OPTIONAL<BOOLEAN> = PlayAnnouncementArg._default_value_for_disconnectFromIPForbidden;
    let requestAnnouncementComplete: OPTIONAL<BOOLEAN> = PlayAnnouncementArg._default_value_for_requestAnnouncementComplete;
    let extensions: OPTIONAL<ExtensionField[]>;
    let connectedParty: OPTIONAL<PlayAnnouncementArg_connectedParty>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "informationToSend": (_el: _Element): void => { informationToSend = $._decode_explicit<InformationToSend>(() => _decode_InformationToSend)(_el); },
        "disconnectFromIPForbidden": (_el: _Element): void => { disconnectFromIPForbidden = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "requestAnnouncementComplete": (_el: _Element): void => { requestAnnouncementComplete = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); },
        "connectedParty": (_el: _Element): void => { connectedParty = _decode_PlayAnnouncementArg_connectedParty(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PlayAnnouncementArg,
        _extension_additions_list_spec_for_PlayAnnouncementArg,
        _root_component_type_list_2_spec_for_PlayAnnouncementArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PlayAnnouncementArg(
        informationToSend,
        disconnectFromIPForbidden,
        requestAnnouncementComplete,
        extensions,
        connectedParty,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PlayAnnouncementArg(el);
}

let _cached_encoder_for_PlayAnnouncementArg: $.ASN1Encoder<PlayAnnouncementArg> | null = null;

/**
 * @summary Encodes a(n) PlayAnnouncementArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PlayAnnouncementArg, encoded as an ASN.1 Element.
 */
export
function _encode_PlayAnnouncementArg (value: PlayAnnouncementArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PlayAnnouncementArg) { _cached_encoder_for_PlayAnnouncementArg = function (value: PlayAnnouncementArg, elGetter: $.ASN1Encoder<PlayAnnouncementArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_InformationToSend, $.BER)(value.informationToSend, $.BER);
    if (value.disconnectFromIPForbidden !== undefined && !$.deepEq(value.disconnectFromIPForbidden, PlayAnnouncementArg._default_value_for_disconnectFromIPForbidden)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.disconnectFromIPForbidden, $.BER);
    }
    if (value.requestAnnouncementComplete !== undefined && !$.deepEq(value.requestAnnouncementComplete, PlayAnnouncementArg._default_value_for_requestAnnouncementComplete)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.requestAnnouncementComplete, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER);
    }
    if (value.connectedParty !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ _encode_PlayAnnouncementArg_connectedParty(value.connectedParty, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PlayAnnouncementArg(value, elGetter);
}


/* eslint-enable */
