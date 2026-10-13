/* eslint-disable */
import {
    OPTIONAL,
    RELATIVE_OID,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPIRIContents, _decode_IPIRIContents, _encode_IPIRIContents } from "../IPMultimediaPDU/IPIRIContents.ta.mjs";
// export { IPIRIContents, _decode_IPIRIContents, _encode_IPIRIContents } from "../IPMultimediaPDU/IPIRIContents.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../LI-PS-PDU/Location.ta.mjs";
import { AdditionalSignalling, _decode_AdditionalSignalling, _encode_AdditionalSignalling } from "../IPMultimediaPDU/AdditionalSignalling.ta.mjs";
import * as LI_PS_PDU from "../LI-PS-PDU/index.mjs";
// export { AdditionalSignalling, _decode_AdditionalSignalling, _encode_AdditionalSignalling } from "../IPMultimediaPDU/AdditionalSignalling.ta.mjs";


/**
 * @summary IPMMIRI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPMMIRI ::= SEQUENCE
 * {
 *     iPMMIRIObjId                [0] RELATIVE-OID,
 *     iPMMIRIContents             [1] IPIRIContents,
 *     ...,
 *     targetLocation              [2] LI-PS-PDU.Location OPTIONAL,
 *         -- This common parameter is defined in ETSI TS 102 232-1 [2], the use of this parameter is described in clause 5.2.3
 *     additionalSignalling        [3] SEQUENCE OF AdditionalSignalling OPTIONAL
 *         -- The use of this parameter is defined in clause 5.2.5
 * }
 * ```
 * 
 * @class
 */
export
class IPMMIRI {
    /**
     * @summary `iPMMIRIObjId`.
     * @public
     * @readonly
     */
    readonly iPMMIRIObjId: RELATIVE_OID;
    /**
     * @summary `iPMMIRIContents`.
     * @public
     * @readonly
     */
    readonly iPMMIRIContents: IPIRIContents;
    /**
     * @summary `targetLocation`.
     * @public
     * @readonly
     */
    readonly targetLocation: OPTIONAL<LI_PS_PDU.Location>;
    /**
     * @summary `additionalSignalling`.
     * @public
     * @readonly
     */
    readonly additionalSignalling: OPTIONAL<AdditionalSignalling[]>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        iPMMIRIObjId: RELATIVE_OID,
        iPMMIRIContents: IPIRIContents,
        targetLocation: OPTIONAL<LI_PS_PDU.Location>,
        additionalSignalling: OPTIONAL<AdditionalSignalling[]>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.iPMMIRIObjId = iPMMIRIObjId;
        this.iPMMIRIContents = iPMMIRIContents;
        this.targetLocation = targetLocation;
        this.additionalSignalling = additionalSignalling;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a IPMMIRI
     * @description
     * 
     * This takes an `object` and converts it to a `IPMMIRI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IPMMIRI`.
     * @returns {IPMMIRI}
     */
    public static _from_object (_o: { [_K in keyof (IPMMIRI)]: (IPMMIRI)[_K] }): IPMMIRI {
        return new IPMMIRI(_o.iPMMIRIObjId, _o.iPMMIRIContents, _o.targetLocation, _o.additionalSignalling, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IPMMIRI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IPMMIRI: $.ComponentSpec[] = [
    new $.ComponentSpec("iPMMIRIObjId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("iPMMIRIContents", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of IPMMIRI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IPMMIRI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IPMMIRI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IPMMIRI: $.ComponentSpec[] = [
    new $.ComponentSpec("targetLocation", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("additionalSignalling", true, $.hasTag(_TagClass.context, 3))
];

let _cached_decoder_for_IPMMIRI: $.ASN1Decoder<IPMMIRI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPMMIRI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPMMIRI (el: _Element): IPMMIRI {
    if (!_cached_decoder_for_IPMMIRI) { _cached_decoder_for_IPMMIRI = function (el: _Element): IPMMIRI {
    let iPMMIRIObjId!: RELATIVE_OID;
    let iPMMIRIContents!: IPIRIContents;
    let targetLocation: OPTIONAL<LI_PS_PDU.Location>;
    let additionalSignalling: OPTIONAL<AdditionalSignalling[]>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "iPMMIRIObjId": (_el: _Element): void => { iPMMIRIObjId = $._decode_implicit<RELATIVE_OID>(() => $._decodeRelativeOID)(_el); },
        "iPMMIRIContents": (_el: _Element): void => { iPMMIRIContents = $._decode_explicit<IPIRIContents>(() => _decode_IPIRIContents)(_el); },
        "targetLocation": (_el: _Element): void => { targetLocation = $._decode_implicit<LI_PS_PDU.Location>(() => LI_PS_PDU._decode_Location)(_el); },
        "additionalSignalling": (_el: _Element): void => { additionalSignalling = $._decode_implicit<AdditionalSignalling[]>(() => $._decodeSequenceOf<AdditionalSignalling>(() => _decode_AdditionalSignalling))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IPMMIRI,
        _extension_additions_list_spec_for_IPMMIRI,
        _root_component_type_list_2_spec_for_IPMMIRI,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IPMMIRI(
        iPMMIRIObjId,
        iPMMIRIContents,
        targetLocation,
        additionalSignalling,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IPMMIRI(el);
}

let _cached_encoder_for_IPMMIRI: $.ASN1Encoder<IPMMIRI> | null = null;

/**
 * @summary Encodes a(n) IPMMIRI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPMMIRI, encoded as an ASN.1 Element.
 */
export
function _encode_IPMMIRI (value: IPMMIRI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPMMIRI) { _cached_encoder_for_IPMMIRI = function (value: IPMMIRI, elGetter: $.ASN1Encoder<IPMMIRI>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeRelativeOID, $.BER)(value.iPMMIRIObjId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_IPIRIContents, $.BER)(value.iPMMIRIContents, $.BER);
    if (value.targetLocation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => LI_PS_PDU._encode_Location, $.BER)(value.targetLocation, $.BER);
    }
    if (value.additionalSignalling !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<AdditionalSignalling>(() => _encode_AdditionalSignalling, $.BER), $.BER)(value.additionalSignalling, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IPMMIRI(value, elGetter);
}


/* eslint-enable */
