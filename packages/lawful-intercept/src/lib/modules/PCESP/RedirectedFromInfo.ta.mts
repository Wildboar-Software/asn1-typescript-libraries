/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyId, _decode_PartyId, _encode_PartyId } from "../PCESP/PartyId.ta.mjs";
// export { PartyId, _decode_PartyId, _encode_PartyId } from "../PCESP/PartyId.ta.mjs";


/**
 * @summary RedirectedFromInfo
 * @description
 *
 * Redirection history carried on `TerminationAttempt`.
 *
 * `lastRedirecting` and `originalCalled` are party identities.
 * `numRedirections` is an integer from 1 to 100, extensible. All three are
 * optional. This edition does not say when each is included.
 *
 * Clause 8.1.1 requires the IRI, when a call has been diverted, to include the
 * actual destination and the intermediate directory numbers. Annex A does not
 * map these fields onto that requirement.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.1.1 and annex A.
 *
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RedirectedFromInfo ::= SEQUENCE {
 *     lastRedirecting         [0] PartyId OPTIONAL,
 *     originalCalled          [1] PartyId OPTIONAL,
 *     numRedirections         [2] INTEGER (1..100, ...) OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class RedirectedFromInfo {
    /**
     * @summary `lastRedirecting`.
     * @description
     *
     * Last redirecting party. Optional. This edition does not say when it is
     * included.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly lastRedirecting: OPTIONAL<PartyId>;
    /**
     * @summary `originalCalled`.
     * @description
     *
     * Originally called party. Optional. This edition does not say when it is
     * included.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly originalCalled: OPTIONAL<PartyId>;
    /**
     * @summary `numRedirections`.
     * @description
     *
     * Number of redirections, from 1 to 100, extensible. Optional. This edition
     * does not say how the count is made.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly numRedirections: OPTIONAL<INTEGER>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        lastRedirecting?: OPTIONAL<PartyId>,
        originalCalled?: OPTIONAL<PartyId>,
        numRedirections?: OPTIONAL<INTEGER>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.lastRedirecting = lastRedirecting;
        this.originalCalled = originalCalled;
        this.numRedirections = numRedirections;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a RedirectedFromInfo
     * @description
     * 
     * This takes an `object` and converts it to a `RedirectedFromInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RedirectedFromInfo`.
     * @returns {RedirectedFromInfo}
     */
    public static _from_object (_o: { [_K in keyof (RedirectedFromInfo)]: (RedirectedFromInfo)[_K] }): RedirectedFromInfo {
        return new RedirectedFromInfo(_o.lastRedirecting, _o.originalCalled, _o.numRedirections, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of RedirectedFromInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RedirectedFromInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("lastRedirecting", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("originalCalled", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("numRedirections", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of RedirectedFromInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RedirectedFromInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RedirectedFromInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RedirectedFromInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RedirectedFromInfo: $.ASN1Decoder<RedirectedFromInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RedirectedFromInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RedirectedFromInfo (el: _Element): RedirectedFromInfo {
    if (!_cached_decoder_for_RedirectedFromInfo) { _cached_decoder_for_RedirectedFromInfo = function (el: _Element): RedirectedFromInfo {
    let lastRedirecting: OPTIONAL<PartyId>;
    let originalCalled: OPTIONAL<PartyId>;
    let numRedirections: OPTIONAL<INTEGER>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "lastRedirecting": (_el: _Element): void => { lastRedirecting = $._decode_implicit<PartyId>(() => _decode_PartyId)(_el); },
        "originalCalled": (_el: _Element): void => { originalCalled = $._decode_implicit<PartyId>(() => _decode_PartyId)(_el); },
        "numRedirections": (_el: _Element): void => { numRedirections = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RedirectedFromInfo,
        _extension_additions_list_spec_for_RedirectedFromInfo,
        _root_component_type_list_2_spec_for_RedirectedFromInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RedirectedFromInfo(
        lastRedirecting,
        originalCalled,
        numRedirections,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RedirectedFromInfo(el);
}

let _cached_encoder_for_RedirectedFromInfo: $.ASN1Encoder<RedirectedFromInfo> | null = null;

/**
 * @summary Encodes a(n) RedirectedFromInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RedirectedFromInfo, encoded as an ASN.1 Element.
 */
export
function _encode_RedirectedFromInfo (value: RedirectedFromInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RedirectedFromInfo) { _cached_encoder_for_RedirectedFromInfo = function (value: RedirectedFromInfo, elGetter: $.ASN1Encoder<RedirectedFromInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.lastRedirecting !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_PartyId, $.BER)(value.lastRedirecting, $.BER);
    }
    if (value.originalCalled !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_PartyId, $.BER)(value.originalCalled, $.BER);
    }
    if (value.numRedirections !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.numRedirections, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RedirectedFromInfo(value, elGetter);
}


/* eslint-enable */
