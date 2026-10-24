/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-SSF-SCF-datatypes/CalledPartyNumber.ta.mjs";
// export { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-SSF-SCF-datatypes/CalledPartyNumber.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
import { type USIServiceIndicator, _decode_USIServiceIndicator, _encode_USIServiceIndicator } from "../IN-SSF-SCF-datatypes/USIServiceIndicator.ta.mjs";
// export { USIServiceIndicator, _decode_USIServiceIndicator, _encode_USIServiceIndicator } from "../IN-SSF-SCF-datatypes/USIServiceIndicator.ta.mjs";
import { type USIInformation, _decode_USIInformation, _encode_USIInformation } from "../IN-SSF-SCF-datatypes/USIInformation.ta.mjs";
// export { USIInformation, _decode_USIInformation, _encode_USIInformation } from "../IN-SSF-SCF-datatypes/USIInformation.ta.mjs";
import { type GenericNumbers, _decode_GenericNumbers, _encode_GenericNumbers } from "../IN-SSF-SCF-datatypes/GenericNumbers.ta.mjs";
// export { GenericNumbers, _decode_GenericNumbers, _encode_GenericNumbers } from "../IN-SSF-SCF-datatypes/GenericNumbers.ta.mjs";


/**
 * @summary InitiateAssociationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitiateAssociationArg ::= SEQUENCE {
 *   calledPartyNumber    [0]  CalledPartyNumber,
 *   extensions           [1]  Extensions OPTIONAL,
 *   uSIServiceIndicator  [2]  USIServiceIndicator OPTIONAL,
 *   uSIInformation       [3]  USIInformation OPTIONAL,
 *   genericNumbers       [4]  GenericNumbers OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class InitiateAssociationArg {
    /**
     * @summary `calledPartyNumber`.
     * @public
     * @readonly
     */
    readonly calledPartyNumber: CalledPartyNumber;
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
     * @summary `genericNumbers`.
     * @public
     * @readonly
     */
    readonly genericNumbers: OPTIONAL<GenericNumbers>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        calledPartyNumber: CalledPartyNumber,
        extensions?: OPTIONAL<Extensions>,
        uSIServiceIndicator?: OPTIONAL<USIServiceIndicator>,
        uSIInformation?: OPTIONAL<USIInformation>,
        genericNumbers?: OPTIONAL<GenericNumbers>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.calledPartyNumber = calledPartyNumber;
        this.extensions = extensions;
        this.uSIServiceIndicator = uSIServiceIndicator;
        this.uSIInformation = uSIInformation;
        this.genericNumbers = genericNumbers;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a InitiateAssociationArg
     * @description
     * 
     * This takes an `object` and converts it to a `InitiateAssociationArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InitiateAssociationArg`.
     * @returns {InitiateAssociationArg}
     */
    public static _from_object (_o: { [_K in keyof (InitiateAssociationArg)]: (InitiateAssociationArg)[_K] }): InitiateAssociationArg {
        return new InitiateAssociationArg(_o.calledPartyNumber, _o.extensions, _o.uSIServiceIndicator, _o.uSIInformation, _o.genericNumbers, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of InitiateAssociationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InitiateAssociationArg: $.ComponentSpec[] = [
    new $.ComponentSpec("calledPartyNumber", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("uSIServiceIndicator", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("uSIInformation", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("genericNumbers", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of InitiateAssociationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InitiateAssociationArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InitiateAssociationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InitiateAssociationArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_InitiateAssociationArg: $.ASN1Decoder<InitiateAssociationArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InitiateAssociationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InitiateAssociationArg (el: _Element): InitiateAssociationArg {
    if (!_cached_decoder_for_InitiateAssociationArg) { _cached_decoder_for_InitiateAssociationArg = function (el: _Element): InitiateAssociationArg {
    let calledPartyNumber!: CalledPartyNumber;
    let extensions: OPTIONAL<Extensions>;
    let uSIServiceIndicator: OPTIONAL<USIServiceIndicator>;
    let uSIInformation: OPTIONAL<USIInformation>;
    let genericNumbers: OPTIONAL<GenericNumbers>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "calledPartyNumber": (_el: _Element): void => { calledPartyNumber = $._decode_implicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "uSIServiceIndicator": (_el: _Element): void => { uSIServiceIndicator = $._decode_explicit<USIServiceIndicator>(() => _decode_USIServiceIndicator)(_el); },
        "uSIInformation": (_el: _Element): void => { uSIInformation = $._decode_implicit<USIInformation>(() => _decode_USIInformation)(_el); },
        "genericNumbers": (_el: _Element): void => { genericNumbers = $._decode_implicit<GenericNumbers>(() => _decode_GenericNumbers)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InitiateAssociationArg,
        _extension_additions_list_spec_for_InitiateAssociationArg,
        _root_component_type_list_2_spec_for_InitiateAssociationArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new InitiateAssociationArg(
        calledPartyNumber,
        extensions,
        uSIServiceIndicator,
        uSIInformation,
        genericNumbers,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_InitiateAssociationArg(el);
}

let _cached_encoder_for_InitiateAssociationArg: $.ASN1Encoder<InitiateAssociationArg> | null = null;

/**
 * @summary Encodes a(n) InitiateAssociationArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitiateAssociationArg, encoded as an ASN.1 Element.
 */
export
function _encode_InitiateAssociationArg (value: InitiateAssociationArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InitiateAssociationArg) { _cached_encoder_for_InitiateAssociationArg = function (value: InitiateAssociationArg, elGetter: $.ASN1Encoder<InitiateAssociationArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CalledPartyNumber, $.BER)(value.calledPartyNumber, $.BER);
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.uSIServiceIndicator !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_USIServiceIndicator, $.BER)(value.uSIServiceIndicator, $.BER);
    }
    if (value.uSIInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_USIInformation, $.BER)(value.uSIInformation, $.BER);
    }
    if (value.genericNumbers !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_GenericNumbers, $.BER)(value.genericNumbers, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_InitiateAssociationArg(value, elGetter);
}


/* eslint-enable */
