/* eslint-disable */
import {
    INTEGER,
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
// export { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
import { GcseCorrelation, _decode_GcseCorrelation, _encode_GcseCorrelation } from "../GCSEHI2Operations/GcseCorrelation.ta.mjs";
// export { GcseCorrelation, _decode_GcseCorrelation, _encode_GcseCorrelation } from "../GCSEHI2Operations/GcseCorrelation.ta.mjs";
import { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
// export { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
import { TPDU_direction, _decode_TPDU_direction, _encode_TPDU_direction, _enum_for_TPDU_direction } from "../GCSE-HI3/TPDU-direction.ta.mjs";
// export { TPDU_direction, _enum_for_TPDU_direction, TPDU_direction_from_target /* IMPORTED_LONG_ENUMERATION_ITEM */, from_target /* IMPORTED_SHORT_ENUMERATION_ITEM */, TPDU_direction_to_target /* IMPORTED_LONG_ENUMERATION_ITEM */, to_target /* IMPORTED_SHORT_ENUMERATION_ITEM */, TPDU_direction_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TPDU_direction, _encode_TPDU_direction } from "../GCSE-HI3/TPDU-direction.ta.mjs";
import { National_HI3_ASN1parameters, _decode_National_HI3_ASN1parameters, _encode_National_HI3_ASN1parameters } from "../Eps-HI3-PS/National-HI3-ASN1parameters.ta.mjs";
// export { National_HI3_ASN1parameters, _decode_National_HI3_ASN1parameters, _encode_National_HI3_ASN1parameters } from "../Eps-HI3-PS/National-HI3-ASN1parameters.ta.mjs";
import { MediaID, _decode_MediaID, _encode_MediaID } from "../GCSE-HI3/MediaID.ta.mjs";
// export { MediaID, _decode_MediaID, _encode_MediaID } from "../GCSE-HI3/MediaID.ta.mjs";


/**
 * @summary GcseLIC_header
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GcseLIC-header ::= SEQUENCE
 * {
 *     hi3gcseDomainId                    [1]    OBJECT IDENTIFIER,  -- 3GPP HI3 gcse Domain ID
 *     lIID                            [2] LawfulInterceptionIdentifier OPTIONAL,
 *     correlation                        [3]    GcseCorrelation,
 *     timeStamp                        [4]    TimeStamp OPTIONAL,
 *     sequence-number                    [5]    INTEGER (0..65535),
 *     t-PDU-direction                    [6] TPDU-direction,
 *     national-HI3-ASN1parameters    [7] National-HI3-ASN1parameters OPTIONAL,
 *     --  encoded per national requirements
 *     mediaID                            [8] MediaID  OPTIONAL,
 *         -- Identifies the media being exchanged by parties on the GCSE group communications.
 * ...
 * 
 * }
 * ```
 * 
 * @class
 */
export
class GcseLIC_header {
    /**
     * @summary `hi3gcseDomainId`.
     * @public
     * @readonly
     */
    readonly hi3gcseDomainId: OBJECT_IDENTIFIER;
    /**
     * @summary `lIID`.
     * @public
     * @readonly
     */
    readonly lIID: OPTIONAL<LawfulInterceptionIdentifier>;
    /**
     * @summary `correlation`.
     * @public
     * @readonly
     */
    readonly correlation: GcseCorrelation;
    /**
     * @summary `timeStamp`.
     * @public
     * @readonly
     */
    readonly timeStamp: OPTIONAL<TimeStamp>;
    /**
     * @summary `sequence_number`.
     * @public
     * @readonly
     */
    readonly sequence_number: INTEGER;
    /**
     * @summary `t_PDU_direction`.
     * @public
     * @readonly
     */
    readonly t_PDU_direction: TPDU_direction;
    /**
     * @summary `national_HI3_ASN1parameters`.
     * @public
     * @readonly
     */
    readonly national_HI3_ASN1parameters: OPTIONAL<National_HI3_ASN1parameters>;
    /**
     * @summary `mediaID`.
     * @public
     * @readonly
     */
    readonly mediaID: OPTIONAL<MediaID>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        hi3gcseDomainId: OBJECT_IDENTIFIER,
        lIID: OPTIONAL<LawfulInterceptionIdentifier>,
        correlation: GcseCorrelation,
        timeStamp: OPTIONAL<TimeStamp>,
        sequence_number: INTEGER,
        t_PDU_direction: TPDU_direction,
        national_HI3_ASN1parameters: OPTIONAL<National_HI3_ASN1parameters>,
        mediaID: OPTIONAL<MediaID>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.hi3gcseDomainId = hi3gcseDomainId;
        this.lIID = lIID;
        this.correlation = correlation;
        this.timeStamp = timeStamp;
        this.sequence_number = sequence_number;
        this.t_PDU_direction = t_PDU_direction;
        this.national_HI3_ASN1parameters = national_HI3_ASN1parameters;
        this.mediaID = mediaID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a GcseLIC_header
     * @description
     * 
     * This takes an `object` and converts it to a `GcseLIC_header`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GcseLIC_header`.
     * @returns {GcseLIC_header}
     */
    public static _from_object (_o: { [_K in keyof (GcseLIC_header)]: (GcseLIC_header)[_K] }): GcseLIC_header {
        return new GcseLIC_header(_o.hi3gcseDomainId, _o.lIID, _o.correlation, _o.timeStamp, _o.sequence_number, _o.t_PDU_direction, _o.national_HI3_ASN1parameters, _o.mediaID, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `t_PDU_direction`
         * @public
         * @static
         */

    public static _enum_for_t_PDU_direction = _enum_for_TPDU_direction;
}

/**
 * @summary The Leading Root Component Types of GcseLIC_header
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GcseLIC_header: $.ComponentSpec[] = [
    new $.ComponentSpec("hi3gcseDomainId", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("lIID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("correlation", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("timeStamp", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sequence-number", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("t-PDU-direction", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("national-HI3-ASN1parameters", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("mediaID", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of GcseLIC_header
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GcseLIC_header: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GcseLIC_header
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GcseLIC_header: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GcseLIC_header: $.ASN1Decoder<GcseLIC_header> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GcseLIC_header
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GcseLIC_header (el: _Element): GcseLIC_header {
    if (!_cached_decoder_for_GcseLIC_header) { _cached_decoder_for_GcseLIC_header = function (el: _Element): GcseLIC_header {
    let hi3gcseDomainId!: OBJECT_IDENTIFIER;
    let lIID: OPTIONAL<LawfulInterceptionIdentifier>;
    let correlation!: GcseCorrelation;
    let timeStamp: OPTIONAL<TimeStamp>;
    let sequence_number!: INTEGER;
    let t_PDU_direction!: TPDU_direction;
    let national_HI3_ASN1parameters: OPTIONAL<National_HI3_ASN1parameters>;
    let mediaID: OPTIONAL<MediaID>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "hi3gcseDomainId": (_el: _Element): void => { hi3gcseDomainId = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "lIID": (_el: _Element): void => { lIID = $._decode_implicit<LawfulInterceptionIdentifier>(() => _decode_LawfulInterceptionIdentifier)(_el); },
        "correlation": (_el: _Element): void => { correlation = $._decode_implicit<GcseCorrelation>(() => _decode_GcseCorrelation)(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_explicit<TimeStamp>(() => _decode_TimeStamp)(_el); },
        "sequence-number": (_el: _Element): void => {
            sequence_number = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof sequence_number === "bigint" ? sequence_number : BigInt(sequence_number);
            if (_n < 0n || _n > 65535n) {
                throw new ASN1OverflowError("GcseLIC_header.sequence_number violates INTEGER range");
            }
        },
        "t-PDU-direction": (_el: _Element): void => { t_PDU_direction = $._decode_implicit<TPDU_direction>(() => _decode_TPDU_direction)(_el); },
        "national-HI3-ASN1parameters": (_el: _Element): void => { national_HI3_ASN1parameters = $._decode_implicit<National_HI3_ASN1parameters>(() => _decode_National_HI3_ASN1parameters)(_el); },
        "mediaID": (_el: _Element): void => { mediaID = $._decode_implicit<MediaID>(() => _decode_MediaID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GcseLIC_header,
        _extension_additions_list_spec_for_GcseLIC_header,
        _root_component_type_list_2_spec_for_GcseLIC_header,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new GcseLIC_header(
        hi3gcseDomainId,
        lIID,
        correlation,
        timeStamp,
        sequence_number,
        t_PDU_direction,
        national_HI3_ASN1parameters,
        mediaID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_GcseLIC_header(el);
}

let _cached_encoder_for_GcseLIC_header: $.ASN1Encoder<GcseLIC_header> | null = null;

/**
 * @summary Encodes a(n) GcseLIC_header into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GcseLIC_header, encoded as an ASN.1 Element.
 */
export
function _encode_GcseLIC_header (value: GcseLIC_header, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GcseLIC_header) { _cached_encoder_for_GcseLIC_header = function (value: GcseLIC_header, elGetter: $.ASN1Encoder<GcseLIC_header>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(8 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER)(value.hi3gcseDomainId, $.BER);
    if (value.lIID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_LawfulInterceptionIdentifier, $.BER)(value.lIID, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_GcseCorrelation, $.BER)(value.correlation, $.BER);
    if (value.timeStamp !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_TimeStamp, $.BER)(value.timeStamp, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.sequence_number, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_TPDU_direction, $.BER)(value.t_PDU_direction, $.BER);
    if (value.national_HI3_ASN1parameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_National_HI3_ASN1parameters, $.BER)(value.national_HI3_ASN1parameters, $.BER);
    }
    if (value.mediaID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_MediaID, $.BER)(value.mediaID, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_GcseLIC_header(value, elGetter);
}


/* eslint-enable */
