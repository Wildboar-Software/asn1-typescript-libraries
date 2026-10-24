/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlternativeIdentities, _decode_AlternativeIdentities, _encode_AlternativeIdentities } from "../IN-SSF-SCF-datatypes/AlternativeIdentities.ta.mjs";
// export { AlternativeIdentities, _decode_AlternativeIdentities, _encode_AlternativeIdentities } from "../IN-SSF-SCF-datatypes/AlternativeIdentities.ta.mjs";


/**
 * @summary IPRelatedInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPRelatedInformation ::= SEQUENCE {
 *   alternativeCalledPartyIds          [0]  AlternativeIdentities OPTIONAL,
 *   alternativeOriginatingPartyIds     [1]  AlternativeIdentities OPTIONAL,
 *   alternativeOriginalCalledPartyIds  [2]  AlternativeIdentities OPTIONAL,
 *   alternativeRedirectingPartyIds     [3]  AlternativeIdentities OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class IPRelatedInformation {
    /**
     * @summary `alternativeCalledPartyIds`.
     * @public
     * @readonly
     */
    readonly alternativeCalledPartyIds: OPTIONAL<AlternativeIdentities>;
    /**
     * @summary `alternativeOriginatingPartyIds`.
     * @public
     * @readonly
     */
    readonly alternativeOriginatingPartyIds: OPTIONAL<AlternativeIdentities>;
    /**
     * @summary `alternativeOriginalCalledPartyIds`.
     * @public
     * @readonly
     */
    readonly alternativeOriginalCalledPartyIds: OPTIONAL<AlternativeIdentities>;
    /**
     * @summary `alternativeRedirectingPartyIds`.
     * @public
     * @readonly
     */
    readonly alternativeRedirectingPartyIds: OPTIONAL<AlternativeIdentities>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        alternativeCalledPartyIds?: OPTIONAL<AlternativeIdentities>,
        alternativeOriginatingPartyIds?: OPTIONAL<AlternativeIdentities>,
        alternativeOriginalCalledPartyIds?: OPTIONAL<AlternativeIdentities>,
        alternativeRedirectingPartyIds?: OPTIONAL<AlternativeIdentities>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.alternativeCalledPartyIds = alternativeCalledPartyIds;
        this.alternativeOriginatingPartyIds = alternativeOriginatingPartyIds;
        this.alternativeOriginalCalledPartyIds = alternativeOriginalCalledPartyIds;
        this.alternativeRedirectingPartyIds = alternativeRedirectingPartyIds;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a IPRelatedInformation
     * @description
     * 
     * This takes an `object` and converts it to a `IPRelatedInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IPRelatedInformation`.
     * @returns {IPRelatedInformation}
     */
    public static _from_object (_o: { [_K in keyof (IPRelatedInformation)]: (IPRelatedInformation)[_K] }): IPRelatedInformation {
        return new IPRelatedInformation(_o.alternativeCalledPartyIds, _o.alternativeOriginatingPartyIds, _o.alternativeOriginalCalledPartyIds, _o.alternativeRedirectingPartyIds, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IPRelatedInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IPRelatedInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("alternativeCalledPartyIds", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("alternativeOriginatingPartyIds", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("alternativeOriginalCalledPartyIds", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("alternativeRedirectingPartyIds", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of IPRelatedInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IPRelatedInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IPRelatedInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IPRelatedInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IPRelatedInformation: $.ASN1Decoder<IPRelatedInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPRelatedInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPRelatedInformation (el: _Element): IPRelatedInformation {
    if (!_cached_decoder_for_IPRelatedInformation) { _cached_decoder_for_IPRelatedInformation = function (el: _Element): IPRelatedInformation {
    let alternativeCalledPartyIds: OPTIONAL<AlternativeIdentities>;
    let alternativeOriginatingPartyIds: OPTIONAL<AlternativeIdentities>;
    let alternativeOriginalCalledPartyIds: OPTIONAL<AlternativeIdentities>;
    let alternativeRedirectingPartyIds: OPTIONAL<AlternativeIdentities>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "alternativeCalledPartyIds": (_el: _Element): void => { alternativeCalledPartyIds = $._decode_implicit<AlternativeIdentities>(() => _decode_AlternativeIdentities)(_el); },
        "alternativeOriginatingPartyIds": (_el: _Element): void => { alternativeOriginatingPartyIds = $._decode_implicit<AlternativeIdentities>(() => _decode_AlternativeIdentities)(_el); },
        "alternativeOriginalCalledPartyIds": (_el: _Element): void => { alternativeOriginalCalledPartyIds = $._decode_implicit<AlternativeIdentities>(() => _decode_AlternativeIdentities)(_el); },
        "alternativeRedirectingPartyIds": (_el: _Element): void => { alternativeRedirectingPartyIds = $._decode_implicit<AlternativeIdentities>(() => _decode_AlternativeIdentities)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IPRelatedInformation,
        _extension_additions_list_spec_for_IPRelatedInformation,
        _root_component_type_list_2_spec_for_IPRelatedInformation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IPRelatedInformation(
        alternativeCalledPartyIds,
        alternativeOriginatingPartyIds,
        alternativeOriginalCalledPartyIds,
        alternativeRedirectingPartyIds,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IPRelatedInformation(el);
}

let _cached_encoder_for_IPRelatedInformation: $.ASN1Encoder<IPRelatedInformation> | null = null;

/**
 * @summary Encodes a(n) IPRelatedInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPRelatedInformation, encoded as an ASN.1 Element.
 */
export
function _encode_IPRelatedInformation (value: IPRelatedInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPRelatedInformation) { _cached_encoder_for_IPRelatedInformation = function (value: IPRelatedInformation, elGetter: $.ASN1Encoder<IPRelatedInformation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.alternativeCalledPartyIds !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_AlternativeIdentities, $.BER)(value.alternativeCalledPartyIds, $.BER);
    }
    if (value.alternativeOriginatingPartyIds !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_AlternativeIdentities, $.BER)(value.alternativeOriginatingPartyIds, $.BER);
    }
    if (value.alternativeOriginalCalledPartyIds !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_AlternativeIdentities, $.BER)(value.alternativeOriginalCalledPartyIds, $.BER);
    }
    if (value.alternativeRedirectingPartyIds !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_AlternativeIdentities, $.BER)(value.alternativeRedirectingPartyIds, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IPRelatedInformation(value, elGetter);
}


/* eslint-enable */
