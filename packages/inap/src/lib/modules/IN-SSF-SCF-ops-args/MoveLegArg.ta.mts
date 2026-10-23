/* eslint-disable */
import {
    NULL,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LegID, _decode_LegID, _encode_LegID } from "../IN-SSF-SCF-datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-SSF-SCF-datatypes/LegID.ta.mjs";
import { CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-SSF-SCF-datatypes/CallSegmentID.ta.mjs";
// export { CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-SSF-SCF-datatypes/CallSegmentID.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";


/**
 * @summary MoveLegArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MoveLegArg ::= SEQUENCE {
 *   legIDToMove              [0]  LegID,
 *   targetCallSegment        [1]  CallSegmentID DEFAULT 1,
 *   extensions               [2]  Extensions OPTIONAL,
 *   ...,
 *   detachSignallingPath     [3]  NULL OPTIONAL, -- action on source
 *   exportSignallingPath     [4]  NULL OPTIONAL -- action on target
 * }
 * ```
 * 
 * @class
 */
export
class MoveLegArg {
    /**
     * @summary `legIDToMove`.
     * @public
     * @readonly
     */
    readonly legIDToMove: LegID;
    /**
     * @summary `targetCallSegment`.
     * @public
     * @readonly
     */
    readonly targetCallSegment: OPTIONAL<CallSegmentID>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary `detachSignallingPath`.
     * @public
     * @readonly
     */
    readonly detachSignallingPath: OPTIONAL<NULL>;
    /**
     * @summary `exportSignallingPath`.
     * @public
     * @readonly
     */
    readonly exportSignallingPath: OPTIONAL<NULL>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        legIDToMove: LegID,
        targetCallSegment?: OPTIONAL<CallSegmentID>,
        extensions?: OPTIONAL<Extensions>,
        detachSignallingPath?: OPTIONAL<NULL>,
        exportSignallingPath?: OPTIONAL<NULL>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.legIDToMove = legIDToMove;
        this.targetCallSegment = targetCallSegment;
        this.extensions = extensions;
        this.detachSignallingPath = detachSignallingPath;
        this.exportSignallingPath = exportSignallingPath;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MoveLegArg
     * @description
     * 
     * This takes an `object` and converts it to a `MoveLegArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MoveLegArg`.
     * @returns {MoveLegArg}
     */
    public static _from_object (_o: { [_K in keyof (MoveLegArg)]: (MoveLegArg)[_K] }): MoveLegArg {
        return new MoveLegArg(_o.legIDToMove, _o.targetCallSegment, _o.extensions, _o.detachSignallingPath, _o.exportSignallingPath, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `targetCallSegment`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_targetCallSegment () { return 1; }
}

/**
 * @summary The Leading Root Component Types of MoveLegArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MoveLegArg: $.ComponentSpec[] = [
    new $.ComponentSpec("legIDToMove", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("targetCallSegment", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of MoveLegArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MoveLegArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MoveLegArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MoveLegArg: $.ComponentSpec[] = [
    new $.ComponentSpec("detachSignallingPath", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("exportSignallingPath", true, $.hasTag(_TagClass.context, 4))
];

let _cached_decoder_for_MoveLegArg: $.ASN1Decoder<MoveLegArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MoveLegArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MoveLegArg (el: _Element): MoveLegArg {
    if (!_cached_decoder_for_MoveLegArg) { _cached_decoder_for_MoveLegArg = function (el: _Element): MoveLegArg {
    let legIDToMove!: LegID;
    let targetCallSegment: OPTIONAL<CallSegmentID> = MoveLegArg._default_value_for_targetCallSegment;
    let extensions: OPTIONAL<Extensions>;
    let detachSignallingPath: OPTIONAL<NULL>;
    let exportSignallingPath: OPTIONAL<NULL>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "legIDToMove": (_el: _Element): void => { legIDToMove = $._decode_explicit<LegID>(() => _decode_LegID)(_el); },
        "targetCallSegment": (_el: _Element): void => { targetCallSegment = $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "detachSignallingPath": (_el: _Element): void => { detachSignallingPath = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "exportSignallingPath": (_el: _Element): void => { exportSignallingPath = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MoveLegArg,
        _extension_additions_list_spec_for_MoveLegArg,
        _root_component_type_list_2_spec_for_MoveLegArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MoveLegArg(
        legIDToMove,
        targetCallSegment,
        extensions,
        detachSignallingPath,
        exportSignallingPath,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MoveLegArg(el);
}

let _cached_encoder_for_MoveLegArg: $.ASN1Encoder<MoveLegArg> | null = null;

/**
 * @summary Encodes a(n) MoveLegArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MoveLegArg, encoded as an ASN.1 Element.
 */
export
function _encode_MoveLegArg (value: MoveLegArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MoveLegArg) { _cached_encoder_for_MoveLegArg = function (value: MoveLegArg, elGetter: $.ASN1Encoder<MoveLegArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_LegID, $.BER)(value.legIDToMove, $.BER);
    if (value.targetCallSegment !== undefined && !$.deepEq(value.targetCallSegment, MoveLegArg._default_value_for_targetCallSegment)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 1, () => _encode_CallSegmentID, $.BER)(value.targetCallSegment, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.detachSignallingPath !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER)(value.detachSignallingPath, $.BER);
    }
    if (value.exportSignallingPath !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER)(value.exportSignallingPath, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MoveLegArg(value, elGetter);
}


/* eslint-enable */
