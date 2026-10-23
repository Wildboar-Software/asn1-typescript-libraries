/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DestinationIndex, _decode_DestinationIndex, _encode_DestinationIndex } from "../IN-SSF-SCF-datatypes/DestinationIndex.ta.mjs";
// export { DestinationIndex, _decode_DestinationIndex, _encode_DestinationIndex } from "../IN-SSF-SCF-datatypes/DestinationIndex.ta.mjs";
import { GapIndicators, _decode_GapIndicators, _encode_GapIndicators } from "../IN-SSF-SCF-datatypes/GapIndicators.ta.mjs";
// export { GapIndicators, _decode_GapIndicators, _encode_GapIndicators } from "../IN-SSF-SCF-datatypes/GapIndicators.ta.mjs";
import { RegistratorIdentifier, _decode_RegistratorIdentifier, _encode_RegistratorIdentifier } from "../IN-SSF-SCF-datatypes/RegistratorIdentifier.ta.mjs";
// export { RegistratorIdentifier, _decode_RegistratorIdentifier, _encode_RegistratorIdentifier } from "../IN-SSF-SCF-datatypes/RegistratorIdentifier.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";


/**
 * @summary CallFilteringArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallFilteringArg ::= SEQUENCE {
 *   destinationIndex       [0]  DestinationIndex,
 *   gapIndicators          [1]  GapIndicators,
 *   registratorIdentifier  [2]  RegistratorIdentifier OPTIONAL,
 *   ...,
 *   ...,
 *   extensions             [3]  Extensions OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CallFilteringArg {
    /**
     * @summary `destinationIndex`.
     * @public
     * @readonly
     */
    readonly destinationIndex: DestinationIndex;
    /**
     * @summary `gapIndicators`.
     * @public
     * @readonly
     */
    readonly gapIndicators: GapIndicators;
    /**
     * @summary `registratorIdentifier`.
     * @public
     * @readonly
     */
    readonly registratorIdentifier: OPTIONAL<RegistratorIdentifier>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;

    constructor (
        destinationIndex: DestinationIndex,
        gapIndicators: GapIndicators,
        registratorIdentifier: OPTIONAL<RegistratorIdentifier>,
        _unrecognizedExtensionsList: _Element[] = [],
        extensions: OPTIONAL<Extensions>
    ) {
        this.destinationIndex = destinationIndex;
        this.gapIndicators = gapIndicators;
        this.registratorIdentifier = registratorIdentifier;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
        this.extensions = extensions;
    }

    /**
     * @summary Restructures an object into a CallFilteringArg
     * @description
     * 
     * This takes an `object` and converts it to a `CallFilteringArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallFilteringArg`.
     * @returns {CallFilteringArg}
     */
    public static _from_object (_o: { [_K in keyof (CallFilteringArg)]: (CallFilteringArg)[_K] }): CallFilteringArg {
        return new CallFilteringArg(_o.destinationIndex, _o.gapIndicators, _o.registratorIdentifier, _o._unrecognizedExtensionsList, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of CallFilteringArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallFilteringArg: $.ComponentSpec[] = [
    new $.ComponentSpec("destinationIndex", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("gapIndicators", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("registratorIdentifier", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of CallFilteringArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallFilteringArg: $.ComponentSpec[] = [
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Extension Addition Component Types of CallFilteringArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallFilteringArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallFilteringArg: $.ASN1Decoder<CallFilteringArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallFilteringArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallFilteringArg (el: _Element): CallFilteringArg {
    if (!_cached_decoder_for_CallFilteringArg) { _cached_decoder_for_CallFilteringArg = function (el: _Element): CallFilteringArg {
    let destinationIndex!: DestinationIndex;
    let gapIndicators!: GapIndicators;
    let registratorIdentifier: OPTIONAL<RegistratorIdentifier>;
    const _unrecognizedExtensionsList: _Element[] = [];
    let extensions: OPTIONAL<Extensions>;
    const callbacks: $.DecodingMap = {
        "destinationIndex": (_el: _Element): void => { destinationIndex = $._decode_implicit<DestinationIndex>(() => _decode_DestinationIndex)(_el); },
        "gapIndicators": (_el: _Element): void => { gapIndicators = $._decode_implicit<GapIndicators>(() => _decode_GapIndicators)(_el); },
        "registratorIdentifier": (_el: _Element): void => { registratorIdentifier = $._decode_implicit<RegistratorIdentifier>(() => _decode_RegistratorIdentifier)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallFilteringArg,
        _extension_additions_list_spec_for_CallFilteringArg,
        _root_component_type_list_2_spec_for_CallFilteringArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CallFilteringArg(
        destinationIndex,
        gapIndicators,
        registratorIdentifier,
        _unrecognizedExtensionsList,
        extensions
    );
}; }
    return _cached_decoder_for_CallFilteringArg(el);
}

let _cached_encoder_for_CallFilteringArg: $.ASN1Encoder<CallFilteringArg> | null = null;

/**
 * @summary Encodes a(n) CallFilteringArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallFilteringArg, encoded as an ASN.1 Element.
 */
export
function _encode_CallFilteringArg (value: CallFilteringArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallFilteringArg) { _cached_encoder_for_CallFilteringArg = function (value: CallFilteringArg, elGetter: $.ASN1Encoder<CallFilteringArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_DestinationIndex, $.BER)(value.destinationIndex, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_GapIndicators, $.BER)(value.gapIndicators, $.BER);
    if (value.registratorIdentifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_RegistratorIdentifier, $.BER)(value.registratorIdentifier, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CallFilteringArg(value, elGetter);
}


/* eslint-enable */
