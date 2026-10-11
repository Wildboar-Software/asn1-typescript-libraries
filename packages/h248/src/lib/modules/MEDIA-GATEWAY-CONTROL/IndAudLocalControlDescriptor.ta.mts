/* eslint-disable */
import {
    NULL,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IndAudPropertyParm, _decode_IndAudPropertyParm, _encode_IndAudPropertyParm } from "../MEDIA-GATEWAY-CONTROL/IndAudPropertyParm.ta.mjs";
import { StreamMode, _decode_StreamMode, _encode_StreamMode, _enum_for_StreamMode } from "../MEDIA-GATEWAY-CONTROL/StreamMode.ta.mjs";


/**
 * @summary IndAudLocalControlDescriptor
 * @description
 * 
 * Individual audit of LocalControl (clause 7.2.5, Annex A).
 *
 * A NULL flag asks for the current value of that property. `streamModeSel`
 * instead asks for the value filtered to one mode, which is how AuditCapability
 * and selective AuditValue name a mode. Both `streamMode` and `streamModeSel`
 * must not be present; if they are, only `streamModeSel` is honoured.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IndAudLocalControlDescriptor ::= SEQUENCE
 *     {
 *         streamMode                    [0] NULL OPTIONAL,
 *         reserveValue                [1] NULL OPTIONAL,
 *         reserveGroup                [2] NULL OPTIONAL,
 *         propertyParms                [3] SEQUENCE OF IndAudPropertyParm OPTIONAL,
 *         ...,
 *         streamModeSel                [4] StreamMode OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class IndAudLocalControlDescriptor {
    constructor (
        /**
         * @summary `streamMode`.
         * @description
         *
         * Present to return the current StreamMode.
         *
         * @public
         * @readonly
         */
        readonly streamMode: OPTIONAL<NULL>,
        /**
         * @summary `reserveValue`.
         * @description
         *
         * Present to return the current ReserveValue flag.
         *
         * @public
         * @readonly
         */
        readonly reserveValue: OPTIONAL<NULL>,
        /**
         * @summary `reserveGroup`.
         * @description
         *
         * Present to return the current ReserveGroup flag.
         *
         * @public
         * @readonly
         */
        readonly reserveGroup: OPTIONAL<NULL>,
        /**
         * @summary `propertyParms`.
         * @description
         *
         * Packaged LocalControl properties to return. The optional nested
         * `PropertyParm` selects on the property's value (Annex A).
         *
         * @public
         * @readonly
         */
        readonly propertyParms: OPTIONAL<IndAudPropertyParm[]>,
        /**
         * @summary `streamModeSel`.
         * @description
         *
         * Return LocalControl only for this StreamMode. Mutually exclusive with
         * `streamMode`; this one wins if both are present (Annex A).
         *
         * @public
         * @readonly
         */
        readonly streamModeSel: OPTIONAL<StreamMode>,
        /**
         * @summary Extensions that are not recognized.
         * @description
         *
         * Extension additions this version does not define. Kept so a later
         * peer can still carry them (ITU-T Rec. H.248.1 (03/2013) clause 11.7).
         *
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IndAudLocalControlDescriptor
     * @description
     * 
     * This takes an `object` and converts it to a `IndAudLocalControlDescriptor`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IndAudLocalControlDescriptor`.
     * @returns {IndAudLocalControlDescriptor}
     */
    public static _from_object (_o: { [_K in keyof (IndAudLocalControlDescriptor)]: (IndAudLocalControlDescriptor)[_K] }): IndAudLocalControlDescriptor {
        return new IndAudLocalControlDescriptor(_o.streamMode, _o.reserveValue, _o.reserveGroup, _o.propertyParms, _o.streamModeSel, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `streamModeSel`
         * @public
         * @static
         */

    public static _enum_for_streamModeSel = _enum_for_StreamMode;
}

/**
 * @summary The Leading Root Component Types of IndAudLocalControlDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IndAudLocalControlDescriptor: $.ComponentSpec[] = [
    new $.ComponentSpec("streamMode", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("reserveValue", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("reserveGroup", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("propertyParms", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of IndAudLocalControlDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IndAudLocalControlDescriptor: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IndAudLocalControlDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IndAudLocalControlDescriptor: $.ComponentSpec[] = [
    new $.ComponentSpec("streamModeSel", true, $.hasTag(_TagClass.context, 4))
];

let _cached_decoder_for_IndAudLocalControlDescriptor: $.ASN1Decoder<IndAudLocalControlDescriptor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IndAudLocalControlDescriptor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IndAudLocalControlDescriptor (el: _Element): IndAudLocalControlDescriptor {
    if (!_cached_decoder_for_IndAudLocalControlDescriptor) { _cached_decoder_for_IndAudLocalControlDescriptor = function (el: _Element): IndAudLocalControlDescriptor {
    let streamMode: OPTIONAL<NULL>;
    let reserveValue: OPTIONAL<NULL>;
    let reserveGroup: OPTIONAL<NULL>;
    let propertyParms: OPTIONAL<IndAudPropertyParm[]>;
    let streamModeSel: OPTIONAL<StreamMode>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "streamMode": (_el: _Element): void => { streamMode = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "reserveValue": (_el: _Element): void => { reserveValue = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "reserveGroup": (_el: _Element): void => { reserveGroup = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "propertyParms": (_el: _Element): void => { propertyParms = $._decode_implicit<IndAudPropertyParm[]>(() => $._decodeSequenceOf<IndAudPropertyParm>(() => _decode_IndAudPropertyParm))(_el); },
        "streamModeSel": (_el: _Element): void => { streamModeSel = $._decode_implicit<StreamMode>(() => _decode_StreamMode)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IndAudLocalControlDescriptor,
        _extension_additions_list_spec_for_IndAudLocalControlDescriptor,
        _root_component_type_list_2_spec_for_IndAudLocalControlDescriptor,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IndAudLocalControlDescriptor(
        streamMode,
        reserveValue,
        reserveGroup,
        propertyParms,
        streamModeSel,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IndAudLocalControlDescriptor(el);
}

let _cached_encoder_for_IndAudLocalControlDescriptor: $.ASN1Encoder<IndAudLocalControlDescriptor> | null = null;

/**
 * @summary Encodes a(n) IndAudLocalControlDescriptor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IndAudLocalControlDescriptor, encoded as an ASN.1 Element.
 */
export
function _encode_IndAudLocalControlDescriptor (value: IndAudLocalControlDescriptor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IndAudLocalControlDescriptor) { _cached_encoder_for_IndAudLocalControlDescriptor = function (value: IndAudLocalControlDescriptor, elGetter: $.ASN1Encoder<IndAudLocalControlDescriptor>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.streamMode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER)(value.streamMode, $.BER)),
            /* IF_ABSENT  */ ((value.reserveValue === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.reserveValue, $.BER)),
            /* IF_ABSENT  */ ((value.reserveGroup === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.reserveGroup, $.BER)),
            /* IF_ABSENT  */ ((value.propertyParms === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<IndAudPropertyParm>(() => _encode_IndAudPropertyParm, $.BER), $.BER)(value.propertyParms, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.streamModeSel === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_StreamMode, $.BER)(value.streamModeSel, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IndAudLocalControlDescriptor(value, elGetter);
}


/* eslint-enable */
