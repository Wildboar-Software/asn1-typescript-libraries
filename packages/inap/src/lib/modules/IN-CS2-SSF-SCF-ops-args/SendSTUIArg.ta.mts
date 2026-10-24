/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { USIServiceIndicator, _decode_USIServiceIndicator, _encode_USIServiceIndicator } from "../IN-CS2-datatypes/USIServiceIndicator.ta.mjs";
// export { USIServiceIndicator, _decode_USIServiceIndicator, _encode_USIServiceIndicator } from "../IN-CS2-datatypes/USIServiceIndicator.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../IN-CS2-datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-CS2-datatypes/LegID.ta.mjs";
import { leg1 } from "../IN-CS2-datatypes/leg1.va.mjs";
// export { leg1 } from "../IN-CS2-datatypes/leg1.va.mjs";
import { USIInformation, _decode_USIInformation, _encode_USIInformation } from "../IN-CS2-datatypes/USIInformation.ta.mjs";
// export { USIInformation, _decode_USIInformation, _encode_USIInformation } from "../IN-CS2-datatypes/USIInformation.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";


/**
 * @summary SendSTUIArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SendSTUIArg ::= SEQUENCE {
 *   uSIServiceIndicator  [0]  USIServiceIndicator,
 *   legID                [1]  LegID DEFAULT sendingSideID:leg1,
 *   uSIInformation       [2]  USIInformation,
 *   extensions
 *     [3]  SEQUENCE OF
 *            ExtensionField OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class SendSTUIArg {
    /**
     * @summary `uSIServiceIndicator`.
     * @public
     * @readonly
     */
    readonly uSIServiceIndicator: USIServiceIndicator;
    /**
     * @summary `legID`.
     * @public
     * @readonly
     */
    readonly legID: OPTIONAL<LegID>;
    /**
     * @summary `uSIInformation`.
     * @public
     * @readonly
     */
    readonly uSIInformation: USIInformation;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<ExtensionField[]>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        uSIServiceIndicator: USIServiceIndicator,
        legID: OPTIONAL<LegID>,
        uSIInformation: USIInformation,
        extensions?: OPTIONAL<ExtensionField[]>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.uSIServiceIndicator = uSIServiceIndicator;
        this.legID = legID;
        this.uSIInformation = uSIInformation;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a SendSTUIArg
     * @description
     * 
     * This takes an `object` and converts it to a `SendSTUIArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SendSTUIArg`.
     * @returns {SendSTUIArg}
     */
    public static _from_object (_o: { [_K in keyof (SendSTUIArg)]: (SendSTUIArg)[_K] }): SendSTUIArg {
        return new SendSTUIArg(_o.uSIServiceIndicator, _o.legID, _o.uSIInformation, _o.extensions, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `legID`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_legID () { return { sendingSideID: leg1 }; }
}

/**
 * @summary The Leading Root Component Types of SendSTUIArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SendSTUIArg: $.ComponentSpec[] = [
    new $.ComponentSpec("uSIServiceIndicator", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("legID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("uSIInformation", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of SendSTUIArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SendSTUIArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SendSTUIArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SendSTUIArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SendSTUIArg: $.ASN1Decoder<SendSTUIArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SendSTUIArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SendSTUIArg (el: _Element): SendSTUIArg {
    if (!_cached_decoder_for_SendSTUIArg) { _cached_decoder_for_SendSTUIArg = function (el: _Element): SendSTUIArg {
    let uSIServiceIndicator!: USIServiceIndicator;
    let legID: OPTIONAL<LegID> = SendSTUIArg._default_value_for_legID;
    let uSIInformation!: USIInformation;
    let extensions: OPTIONAL<ExtensionField[]>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "uSIServiceIndicator": (_el: _Element): void => { uSIServiceIndicator = $._decode_implicit<USIServiceIndicator>(() => _decode_USIServiceIndicator)(_el); },
        "legID": (_el: _Element): void => { legID = $._decode_explicit<LegID>(() => _decode_LegID)(_el); },
        "uSIInformation": (_el: _Element): void => { uSIInformation = $._decode_implicit<USIInformation>(() => _decode_USIInformation)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SendSTUIArg,
        _extension_additions_list_spec_for_SendSTUIArg,
        _root_component_type_list_2_spec_for_SendSTUIArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SendSTUIArg(
        uSIServiceIndicator,
        legID,
        uSIInformation,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SendSTUIArg(el);
}

let _cached_encoder_for_SendSTUIArg: $.ASN1Encoder<SendSTUIArg> | null = null;

/**
 * @summary Encodes a(n) SendSTUIArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SendSTUIArg, encoded as an ASN.1 Element.
 */
export
function _encode_SendSTUIArg (value: SendSTUIArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SendSTUIArg) { _cached_encoder_for_SendSTUIArg = function (value: SendSTUIArg, elGetter: $.ASN1Encoder<SendSTUIArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_USIServiceIndicator, $.BER)(value.uSIServiceIndicator, $.BER);
    if (value.legID !== undefined && !$.deepEq(value.legID, SendSTUIArg._default_value_for_legID)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 1, () => _encode_LegID, $.BER)(value.legID, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_USIInformation, $.BER)(value.uSIInformation, $.BER);
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SendSTUIArg(value, elGetter);
}


/* eslint-enable */
