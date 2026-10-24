/* eslint-disable */
import {
    type IA5String,
    type INTEGER,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UsedUnitContainer, _decode_UsedUnitContainer, _encode_UsedUnitContainer } from "../CHFChargingDataTypes/UsedUnitContainer.ta.mjs";


/**
 * @summary MultipleUnitUsage
 * @description
 *
 * One container in the CHF-CDR list of multiple unit usage. The list applies
 * to CHF-CDR and holds one or more containers.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.5.1.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MultipleUnitUsage ::= SEQUENCE {
 *    ratingGroup          [0] IMPLICIT INTEGER,
 *    usedUnitContainers   [1] IMPLICIT SEQUENCE  OF
 *       UsedUnitContainer OPTIONAL,
 *    uPFID                [2] IMPLICIT IA5String  ( SIZE( 1 .. 36 ) ) OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MultipleUnitUsage {
    /**
     * @summary `ratingGroup`.
     * @description
     *
     * The field identifies the rating group. The parameter corresponds to the
     * Charging Key as specified in TS 23.503 [246].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.5.1.7.
     *
     * @public
     * @readonly
     */
    readonly ratingGroup: INTEGER;
    /**
     * @summary `usedUnitContainers`.
     * @description
     *
     * This list applicable in CHF-CDR includes one or more containers. Each
     * container includes the following fields:
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.5.1.14.
     *
     * @public
     * @readonly
     */
    readonly usedUnitContainers: OPTIONAL<UsedUnitContainer[]>;
    /**
     * @summary `uPFID`.
     * @public
     * @readonly
     */
    readonly uPFID: OPTIONAL<IA5String>;

    constructor (
        ratingGroup: INTEGER,
        usedUnitContainers?: OPTIONAL<UsedUnitContainer[]>,
        uPFID?: OPTIONAL<IA5String>
    ) {
        this.ratingGroup = ratingGroup;
        this.usedUnitContainers = usedUnitContainers;
        this.uPFID = uPFID;
    
        if (this.uPFID !== undefined && (this.uPFID.length < 1 || this.uPFID.length > 36)) {
            throw new ASN1SizeError("MultipleUnitUsage.uPFID violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a MultipleUnitUsage
     * @description
     * 
     * This takes an `object` and converts it to a `MultipleUnitUsage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MultipleUnitUsage`.
     * @returns {MultipleUnitUsage}
     */
    public static _from_object (_o: { [_K in keyof (MultipleUnitUsage)]: (MultipleUnitUsage)[_K] }): MultipleUnitUsage {
        return new MultipleUnitUsage(_o.ratingGroup, _o.usedUnitContainers, _o.uPFID);
    }


}

/**
 * @summary The Leading Root Component Types of MultipleUnitUsage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MultipleUnitUsage: $.ComponentSpec[] = [
    new $.ComponentSpec("ratingGroup", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("usedUnitContainers", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("uPFID", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of MultipleUnitUsage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MultipleUnitUsage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MultipleUnitUsage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MultipleUnitUsage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MultipleUnitUsage: $.ASN1Decoder<MultipleUnitUsage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MultipleUnitUsage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MultipleUnitUsage (el: _Element): MultipleUnitUsage {
    if (!_cached_decoder_for_MultipleUnitUsage) { _cached_decoder_for_MultipleUnitUsage = function (el: _Element): MultipleUnitUsage {
    let ratingGroup!: INTEGER;
    let usedUnitContainers: OPTIONAL<UsedUnitContainer[]>;
    let uPFID: OPTIONAL<IA5String>;
    const callbacks: $.DecodingMap = {
        "ratingGroup": (_el: _Element): void => { ratingGroup = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "usedUnitContainers": (_el: _Element): void => { usedUnitContainers = $._decode_implicit<UsedUnitContainer[]>(() => $._decodeSequenceOf<UsedUnitContainer>(() => _decode_UsedUnitContainer))(_el); },
        "uPFID": (_el: _Element): void => { uPFID = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MultipleUnitUsage,
        _extension_additions_list_spec_for_MultipleUnitUsage,
        _root_component_type_list_2_spec_for_MultipleUnitUsage,
        undefined,
    );
    return new MultipleUnitUsage(
        ratingGroup,
        usedUnitContainers,
        uPFID
    );
}; }
    return _cached_decoder_for_MultipleUnitUsage(el);
}

let _cached_encoder_for_MultipleUnitUsage: $.ASN1Encoder<MultipleUnitUsage> | null = null;

/**
 * @summary Encodes a(n) MultipleUnitUsage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MultipleUnitUsage, encoded as an ASN.1 Element.
 */
export
function _encode_MultipleUnitUsage (value: MultipleUnitUsage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MultipleUnitUsage) { _cached_encoder_for_MultipleUnitUsage = function (value: MultipleUnitUsage, _elGetter: $.ASN1Encoder<MultipleUnitUsage>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.ratingGroup, $.BER));
    if (value.usedUnitContainers !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<UsedUnitContainer>(() => _encode_UsedUnitContainer, $.BER), $.BER)(value.usedUnitContainers, $.BER));
    }
    if (value.uPFID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeIA5String, $.BER)(value.uPFID, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MultipleUnitUsage(value, elGetter);
}


/* eslint-enable */
