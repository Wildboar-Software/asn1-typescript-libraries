/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { USIServiceIndicator, _decode_USIServiceIndicator, _encode_USIServiceIndicator } from "../IN-SSF-SCF-datatypes/USIServiceIndicator.ta.mjs";
// export { USIServiceIndicator, _decode_USIServiceIndicator, _encode_USIServiceIndicator } from "../IN-SSF-SCF-datatypes/USIServiceIndicator.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../IN-SSF-SCF-datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-SSF-SCF-datatypes/LegID.ta.mjs";
import { leg1 } from "../IN-SSF-SCF-datatypes/leg1.va.mjs";
// export { leg1 } from "../IN-SSF-SCF-datatypes/leg1.va.mjs";
import { USIInformation, _decode_USIInformation, _encode_USIInformation } from "../IN-SSF-SCF-datatypes/USIInformation.ta.mjs";
// export { USIInformation, _decode_USIInformation, _encode_USIInformation } from "../IN-SSF-SCF-datatypes/USIInformation.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";


/**
 * @summary ReportUTSIArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportUTSIArg ::= SEQUENCE {
 *   uSIServiceIndicator  [0]  USIServiceIndicator,
 *   legID                [1]  LegID DEFAULT receivingSideID:leg1,
 *   uSIInformation       [2]  USIInformation,
 *   extensions           [3]  Extensions OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class ReportUTSIArg {
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
    readonly extensions: OPTIONAL<Extensions>;
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
        extensions?: OPTIONAL<Extensions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.uSIServiceIndicator = uSIServiceIndicator;
        this.legID = legID;
        this.uSIInformation = uSIInformation;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ReportUTSIArg
     * @description
     * 
     * This takes an `object` and converts it to a `ReportUTSIArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReportUTSIArg`.
     * @returns {ReportUTSIArg}
     */
    public static _from_object (_o: { [_K in keyof (ReportUTSIArg)]: (ReportUTSIArg)[_K] }): ReportUTSIArg {
        return new ReportUTSIArg(_o.uSIServiceIndicator, _o.legID, _o.uSIInformation, _o.extensions, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `legID`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_legID () { return { receivingSideID: leg1 }; }
}

/**
 * @summary The Leading Root Component Types of ReportUTSIArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReportUTSIArg: $.ComponentSpec[] = [
    new $.ComponentSpec("uSIServiceIndicator", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("legID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("uSIInformation", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ReportUTSIArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReportUTSIArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReportUTSIArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReportUTSIArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReportUTSIArg: $.ASN1Decoder<ReportUTSIArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportUTSIArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReportUTSIArg (el: _Element): ReportUTSIArg {
    if (!_cached_decoder_for_ReportUTSIArg) { _cached_decoder_for_ReportUTSIArg = function (el: _Element): ReportUTSIArg {
    let uSIServiceIndicator!: USIServiceIndicator;
    let legID: OPTIONAL<LegID> = ReportUTSIArg._default_value_for_legID;
    let uSIInformation!: USIInformation;
    let extensions: OPTIONAL<Extensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "uSIServiceIndicator": (_el: _Element): void => { uSIServiceIndicator = $._decode_explicit<USIServiceIndicator>(() => _decode_USIServiceIndicator)(_el); },
        "legID": (_el: _Element): void => { legID = $._decode_explicit<LegID>(() => _decode_LegID)(_el); },
        "uSIInformation": (_el: _Element): void => { uSIInformation = $._decode_implicit<USIInformation>(() => _decode_USIInformation)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReportUTSIArg,
        _extension_additions_list_spec_for_ReportUTSIArg,
        _root_component_type_list_2_spec_for_ReportUTSIArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ReportUTSIArg(
        uSIServiceIndicator,
        legID,
        uSIInformation,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ReportUTSIArg(el);
}

let _cached_encoder_for_ReportUTSIArg: $.ASN1Encoder<ReportUTSIArg> | null = null;

/**
 * @summary Encodes a(n) ReportUTSIArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportUTSIArg, encoded as an ASN.1 Element.
 */
export
function _encode_ReportUTSIArg (value: ReportUTSIArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReportUTSIArg) { _cached_encoder_for_ReportUTSIArg = function (value: ReportUTSIArg, elGetter: $.ASN1Encoder<ReportUTSIArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_USIServiceIndicator, $.BER)(value.uSIServiceIndicator, $.BER);
    if (value.legID !== undefined && !$.deepEq(value.legID, ReportUTSIArg._default_value_for_legID)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 1, () => _encode_LegID, $.BER)(value.legID, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_USIInformation, $.BER)(value.uSIInformation, $.BER);
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ReportUTSIArg(value, elGetter);
}


/* eslint-enable */
